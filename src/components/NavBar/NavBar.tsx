import { FC } from "react";
import { NavBarList } from "./NavBarList";
import { NavBarConnector } from "./NavBarConnector";
import { navStyle } from "./styles";

export const NavBar: FC = () => {
  return (
    <nav style={navStyle}>
      <NavBarList />
      <NavBarConnector />
    </nav>
  );
};
