import { useTaskTracker } from "@/contexts/taskTracker";
import { Tasks } from "@pages";
import { useEffect } from "react";

export const EthersTasks = () => {
  const { tasks, createTask, fetchTasks } = useTaskTracker();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return <Tasks title="Eth - Ethers Tasks" tasks={tasks} onCreateTask={createTask} />;
};
