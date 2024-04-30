import { FC, useEffect, useState } from "react";
import { NavBarButton } from "@components/NavBar";

export const EthersDisconnectButton: FC = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const { ethereum } = window;
    const handleAccountsChanged = (accounts: string[]) => {
      setAddress(accounts[0] || "");
    };

    ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  const disconnect = () => {
    // Ethers does not manage connection state, therefore we just set address to empty
    setAddress("");
  };

  return (
    <NavBarButton
      disabled={!address}
      onClick={disconnect}
      value={"Disconnect"}
      helperText={address || "Not connected"}
    />
  );
};
