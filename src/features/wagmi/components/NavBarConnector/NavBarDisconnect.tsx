import { FC } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { navConnectorStyle } from "@components/NavBar";

export const NavBarDisconnect: FC = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <div style={navConnectorStyle}>
      <p>{address}</p>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
};
