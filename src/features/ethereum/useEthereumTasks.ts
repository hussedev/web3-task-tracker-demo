import { useEffect, useState } from "react";
import { TaskType } from "../../types";
import { createTask, fetchTasks } from "../../lib/ethereum";

export const useEthereumTasks = () => {
  const [tasks, setTask] = useState<TaskType[]>([]);

  useEffect(() => {
    fetchTasks().then(taskArray => {
      if (taskArray) setTask(taskArray);
    });
  }, []);

  return { tasks, createTask };
};
