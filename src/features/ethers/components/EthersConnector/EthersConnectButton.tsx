import { FC, useEffect, useState } from "react";
import { NavBarButton } from "@components/NavBar";

export const EthersConnectButton: FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const checkIsReady = async () => {
      setIsReady(!!window.ethereum?.isMetaMask);
    };

    checkIsReady();
  }, []);

  const handleConnect = async () => {
    try {
      setIsPending(true);
      if (!window.ethereum?.isMetaMask) {
        throw new Error("MetaMask is not available");
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsPending(false);
    } catch (error) {
      console.error("Failed to connect:", error);
      setIsError(true);
      setIsPending(false);
    }
  };

  return (
    <NavBarButton
      error={isError}
      disabled={!isReady || isPending}
      onClick={handleConnect}
      value={isError ? "Retry" : `${isPending ? "Connecting..." : "MetaMask"}`}
      helperText={isError ? "Error connecting to MetaMask with ethers.js" : ""}
    />
  );
};
