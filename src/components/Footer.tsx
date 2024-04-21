import { CSSProperties, FC } from "react";

const footerStyle: CSSProperties = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  color: "#333",
  fontSize: "16px"
};

interface FooterProps {
  style?: CSSProperties;
}

export const Footer: FC<FooterProps> = ({ style }) => {
  return <footer style={style || footerStyle}>2024 Task Tracker Blockchain Comparison</footer>;
};
