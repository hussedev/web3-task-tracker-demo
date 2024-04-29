import { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavBarItem } from "./NavBarItem";
import { navListStyle } from "./styles";

const items = [
  { title: "Home", path: "/" },
  { title: "Eth-Ethers", path: "/eth-ethers" },
  { title: "Eth-wagmi", path: "/eth-wagmi" }
];

export const NavBarList: FC = () => {
  const { pathname } = useLocation();
  return (
    <ul style={navListStyle}>
      {items.map(({ title, path }) => (
        <NavBarItem key={path} title={title} path={path} isSelected={pathname === path} />
      ))}
    </ul>
  );
};
