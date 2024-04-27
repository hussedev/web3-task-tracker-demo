import { TaskType } from "@types";
import { CSSProperties, FC } from "react";

interface TaskListProps {
  tasks: TaskType[];
}

const listItemStyle: CSSProperties = {
  borderBottom: "1px solid #ccc",
  padding: "8px 0",
  marginBottom: "8px"
};

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map(({ id, description }) => (
        <div key={id} style={listItemStyle}>
          {`${id} - ${description}`}
        </div>
      ))}
    </>
  );
};
