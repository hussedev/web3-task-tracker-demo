import { CSSProperties } from "react";

const navCommon: CSSProperties = {
  display: "flex",
  gap: "1rem",
  color: "#EEE"
};

export const navListStyle: CSSProperties = {
  ...navCommon,
  listStyle: "none",
  padding: "0"
};

export const navConnectorStyle: CSSProperties = {
  ...navCommon,
  height: "10px",
  justifyContent: "flex-end",
  alignItems: "center"
};

export const navStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#444",
  padding: "1rem"
};

export const navItemStyle: CSSProperties = {};

export const navItemSelectedStyle: CSSProperties = {
  ...navItemStyle,
  borderBottom: "2px solid #DDD"
};

export const navItemLinkStyle: CSSProperties = { color: "inherit", textDecoration: "none" };
