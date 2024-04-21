import { useEthereumTasks } from "./useEthereumTasks";

const EthereumTasks = () => {
  const tasks = useEthereumTasks();

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>{task.description}</div>
      ))}
    </div>
  );
};

export default EthereumTasks;
