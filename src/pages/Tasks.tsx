import { FC } from "react";
import { TaskType } from "../types";
import { TaskInput } from "../components/TaskInput";
import { TaskList } from "../components";

interface TasksProps {
  title?: string;
  tasks: TaskType[];
  onCreateTask: (description: string) => void;
}

export const Tasks: FC<TasksProps> = ({ title = "Tasks", tasks, onCreateTask }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginBottom: "16px" }}>{title}</h2>

      <TaskInput onCreateTask={onCreateTask} />

      <TaskList tasks={tasks} />
    </div>
  );
};
