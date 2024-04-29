import { Tasks } from "@pages";
import { useEthersTasks } from "./useEthersTasks";

export const EthersTasks = () => {
  const { tasks, createTask } = useEthersTasks();

  return <Tasks title="Eth - Ethers Tasks" tasks={tasks} onCreateTask={createTask} />;
};
