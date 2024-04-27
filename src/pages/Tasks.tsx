import { FC } from "react";
import { TaskType } from "@types";
import { InputForm, TaskList } from "@components";

interface TasksProps {
  title?: string;
  tasks: TaskType[];
  onCreateTask: (description: string) => void;
}

export const Tasks: FC<TasksProps> = ({ title = "Tasks", tasks, onCreateTask }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginBottom: "16px" }}>{title}</h2>

      <InputForm onSubmit={onCreateTask} placeholder="Enter task description" buttonText="Create" />

      <TaskList tasks={tasks} />
    </div>
  );
};
