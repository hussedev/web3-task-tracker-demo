import { CSSProperties, ChangeEvent, FC, FormEvent, useState } from "react";

const inputContainerStyle: CSSProperties = { display: "flex", marginBottom: "8px" };
const inputStyle: CSSProperties = {
  flex: "1",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginRight: "8px"
};
const inputButtonStyle: CSSProperties = {
  padding: "8px 16px",
  border: "1px solid #ccc",
  color: "#555",
  borderRadius: "4px",
  cursor: "pointer"
};

interface InputFormProps {
  disabled?: boolean;
  buttonText: string;
  onSubmit: (value: string) => void;
  placeholder: string;
}

export const InputForm: FC<InputFormProps> = ({ buttonText, disabled, onSubmit, placeholder }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue !== "") {
      onSubmit(trimmedValue);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={inputContainerStyle}>
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={inputStyle}
      />
      <button disabled={disabled} type="submit" style={inputButtonStyle}>
        {buttonText}
      </button>
    </form>
  );
};
