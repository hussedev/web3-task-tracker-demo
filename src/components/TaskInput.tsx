import { CSSProperties, ChangeEvent, FC, FormEvent, useState } from "react";

const containerStyle: CSSProperties = { display: "flex", marginBottom: "8px" };
const inputStyle: CSSProperties = {
  flex: "1",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginRight: "8px"
};
const buttonStyle: CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#64629D",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

interface TaskInputProps {
  onCreateTask: (description: string) => void;
}

export const TaskInput: FC<TaskInputProps> = ({ onCreateTask }) => {
  const [description, setDescription] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim() !== "") {
      onCreateTask(description.trim());
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <input
        type="text"
        value={description}
        onChange={handleInputChange}
        placeholder="Enter task description"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Create
      </button>
    </form>
  );
};
