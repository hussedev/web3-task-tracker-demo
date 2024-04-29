import { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavBarItem } from "./NavBarItem";
import { navListStyle } from "./styles";
import { appChildren } from "@/routes";

export const NavBarList: FC = () => {
  const { pathname } = useLocation();
  return (
    <ul style={navListStyle}>
      {appChildren.map(({ title, path }) => (
        <NavBarItem key={path} title={title} path={path} isSelected={pathname === path} />
      ))}
    </ul>
  );
};
