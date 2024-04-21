import { TaskList } from "../../components";
import { useEthereumTasks } from "./useEthereumTasks";

const EthereumTasks = () => {
  const tasks = useEthereumTasks();

  return <TaskList title="Ethereum Tasks" tasks={tasks} />;
};

export default EthereumTasks;
