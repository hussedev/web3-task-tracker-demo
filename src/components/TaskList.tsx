import { CSSProperties, FC } from "react";
import { TaskType } from "../types";

interface TaskListProps {
  title?: string;
  tasks: TaskType[];
}

export const TaskList: FC<TaskListProps> = ({ title = "Tasks", tasks }) => {
  const listItemStyle: CSSProperties = {
    borderBottom: "1px solid #ccc",
    padding: "8px 0",
    marginBottom: "8px"
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>{title}</h2>

      {tasks.map(task => (
        <div key={task.id} style={listItemStyle}>
          {task.description}
        </div>
      ))}
    </div>
  );
};
