import { useEffect, useState } from "react";
import { TaskType } from "../../types";

export const useEthereumTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const dummyTasks: TaskType[] = [
        { id: 1, description: "Complete the integration with Ethereum" }
      ];
      setTasks(dummyTasks);
    };

    fetchTasks();
  }, []);

  return tasks;
};
