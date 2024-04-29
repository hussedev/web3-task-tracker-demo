import { FC } from "react";
import { Link } from "react-router-dom";
import { navItemLinkStyle, navItemSelectedStyle, navItemStyle } from "./styles";

interface Props {
  path: string;
  title: string;
  isSelected: boolean;
}

export const NavBarItem: FC<Props> = ({ isSelected, path, title }) => {
  return (
    <li style={isSelected ? navItemSelectedStyle : navItemStyle}>
      <Link to={path} style={navItemLinkStyle}>
        {title}
      </Link>
    </li>
  );
};
