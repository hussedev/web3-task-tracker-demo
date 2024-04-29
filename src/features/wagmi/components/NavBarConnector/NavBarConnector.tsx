import { FC } from "react";
import { useAccount } from "wagmi";
import { NavBarDisconnect } from "./NavBarDisconnect";
import { NavBarConnect } from "./NavBarConnect";

export const NavBarConnector: FC = () => {
  const { isConnected } = useAccount();

  return isConnected ? <NavBarDisconnect /> : <NavBarConnect />;
};
