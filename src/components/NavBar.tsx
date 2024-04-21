import { CSSProperties, FC } from "react";
import { Link, useLocation } from "react-router-dom";

const navStyle: CSSProperties = { background: "#444", padding: "1rem 0" };
const navListStyle: CSSProperties = { display: "flex", listStyle: "none", padding: 0 };
const navListItemStyle: CSSProperties = {
  marginLeft: "1rem",
  color: "#EEE"
};
const navListItemSelectedStyle: CSSProperties = {
  borderBottom: "2px solid #DDD"
};
const linkStyle: CSSProperties = { color: "inherit", textDecoration: "none" };

export const NavBar: FC = () => {
  const { pathname } = useLocation();

  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li style={{ ...navListItemStyle, ...(pathname === "/" && navListItemSelectedStyle) }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li
          style={{ ...navListItemStyle, ...(pathname === "/ethereum" && navListItemSelectedStyle) }}
        >
          <Link to="/ethereum" style={linkStyle}>
            Ethereum
          </Link>
        </li>
      </ul>
    </nav>
  );
};
