import { useEffect, useState } from "react";
import { createTask, fetchTasks } from "@lib/ethers";
import { TaskType } from "@types";

export const useEthereumTasks = () => {
  const [tasks, setTask] = useState<TaskType[]>([]);

  useEffect(() => {
    fetchTasks().then(taskArray => {
      if (taskArray) setTask(taskArray);
    });
  }, []);

  return { tasks, createTask };
};
