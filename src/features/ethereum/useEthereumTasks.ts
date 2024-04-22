import { useEffect, useState } from "react";
import { TaskType } from "../../types";
import { fetchTasks } from "../../lib/ethereum";

export const useEthereumTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    fetchTasks().then(taskArray => {
      if (taskArray) setTasks(taskArray);
    });
  }, []);

  return tasks;
};
