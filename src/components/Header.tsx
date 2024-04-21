import { CSSProperties, FC } from "react";

const headerStyle: CSSProperties = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "24px"
};

interface HeaderProps {
  style?: CSSProperties;
}

export const Header: FC<HeaderProps> = ({ style }) => {
  return <header style={style || headerStyle}>Task Tracker Compare Blockchains</header>;
};
