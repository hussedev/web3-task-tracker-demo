import { CSSProperties, FC } from "react";
import { TaskType } from "../types";
import { TaskInput } from "./TaskInput";

interface TaskListProps {
  title?: string;
  tasks: TaskType[];
  onCreateTask: (description: string) => void;
}

const listItemStyle: CSSProperties = {
  borderBottom: "1px solid #ccc",
  padding: "8px 0",
  marginBottom: "8px"
};

export const TaskList: FC<TaskListProps> = ({ title = "Tasks", tasks, onCreateTask }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginBottom: "16px" }}>{title}</h2>

      <TaskInput onCreateTask={onCreateTask} />

      {tasks.map(({ id, description }) => (
        <div key={id} style={listItemStyle}>
          {`${id} - ${description}`}
        </div>
      ))}
    </div>
  );
};
