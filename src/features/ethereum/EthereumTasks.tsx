import { createTask } from "../../lib/ethereum";
import { Tasks } from "../../pages";
import { useEthereumTasks } from "./useEthereumTasks";

const EthereumTasks = () => {
  const tasks = useEthereumTasks();

  return <Tasks title="Ethereum Tasks" tasks={tasks} onCreateTask={createTask} />;
};

export default EthereumTasks;
