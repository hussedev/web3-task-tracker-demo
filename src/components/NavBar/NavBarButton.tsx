import { FC } from "react";
import { navConnectorStyle } from "./styles";

interface NavBarButtonProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  value: string;
  onClick: () => void;
}

export const NavBarButton: FC<NavBarButtonProps> = ({
  disabled,
  error,
  helperText,
  value,
  onClick
}) => {
  return (
    <div style={{ ...navConnectorStyle, ...(error && { color: "red" }) }}>
      {helperText && <p>{helperText}</p>}
      <button disabled={disabled} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
