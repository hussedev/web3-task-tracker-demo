import { TaskType } from "../../types";
import { getContract } from "./contract";

export const createTask = async (description: string) => {
  try {
    const contract = await getContract();

    const transaction = await contract.createTask(description);
    await transaction.wait();
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

export const fetchTasks = async () => {
  try {
    const contract = await getContract();
    const count = Number(await contract.getTasksCount());

    const taskArray: TaskType[] = [];

    for (let i = 0; i < count; i++) {
      const task = await contract.getTask(i);
      const parsedTask: TaskType = { id: Number(task[0]), description: task[1] };
      taskArray.push(parsedTask);
    }

    return taskArray;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
