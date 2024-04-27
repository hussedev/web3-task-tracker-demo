import { Tasks } from "@pages";
import { useEthereumTasks } from "./useEthereumTasks";

export const EthereumTasks = () => {
  const { tasks, createTask } = useEthereumTasks();

  return <Tasks title="Ethereum Tasks" tasks={tasks} onCreateTask={createTask} />;
};
