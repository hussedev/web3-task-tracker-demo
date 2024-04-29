import { FC } from "react";
import { Link } from "react-router-dom";

export const Main: FC = () => {
  return (
    <div
      style={{
        margin: "2rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <p>
        This is a simple app to compare smart contract implementations in different blockchains.
      </p>
      <p>
        The goal is to provide a platform for developers to easily compare and contrast the features
        and capabilities of different blockchain platforms.
      </p>
      <p>To begin exploring, select a blockchain:</p>
      <ul>
        <li>
          <Link to="/eth-ethers">Ethers</Link>
        </li>
      </ul>
    </div>
  );
};
