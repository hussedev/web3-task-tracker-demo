export interface TaskType {
  id: number;
  description: string;
}

export type TaskTrackerContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  fetchTasks: () => Promise<void>;
  createTask: (description: string) => Promise<void>;
};
