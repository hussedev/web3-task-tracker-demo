import { FC, useEffect, useState } from "react";
import { EthersDisconnectButton } from "./EthersDisconnectButton";
import { EthersConnectButton } from "./EthersConnectButton";

export const EthersConnector: FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const { ethereum } = window;

    if (!ethereum) {
      return;
    }

    const checkConnection = async () => {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      setIsConnected(accounts.length > 0);
    };

    checkConnection();

    const handleAccountsChanged = (accounts: string[]) => {
      setIsConnected(accounts.length > 0);
    };

    ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  return isConnected ? <EthersDisconnectButton /> : <EthersConnectButton />;
};
