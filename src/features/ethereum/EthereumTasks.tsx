import { TaskList } from "../../components";
import { createTask } from "../../lib/ethereum";
import { useEthereumTasks } from "./useEthereumTasks";

const EthereumTasks = () => {
  const tasks = useEthereumTasks();

  return <TaskList title="Ethereum Tasks" tasks={tasks} onCreateTask={createTask} />;
};

export default EthereumTasks;
