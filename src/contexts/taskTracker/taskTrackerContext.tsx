import { createTask as etherCreateTask, fetchTasks as ethersFetchTasks } from "@/lib/ethers";
import { TaskTrackerContextType, TaskType } from "@/types";
import { FC, ReactNode, createContext, useState } from "react";

export const TaskTrackerContext = createContext<TaskTrackerContextType | null>(null);

export const TaskTrackerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const fetchTasks = async () => {
    const tasks = await ethersFetchTasks();
    if (tasks) setTasks(tasks);
  };

  const createTask = async (description: string) => {
    await etherCreateTask(description);
    await fetchTasks();
  };

  return (
    <TaskTrackerContext.Provider value={{ tasks, setTasks, fetchTasks, createTask }}>
      {children}
    </TaskTrackerContext.Provider>
  );
};
