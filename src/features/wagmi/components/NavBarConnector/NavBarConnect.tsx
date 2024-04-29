import { FC, useEffect, useMemo, useState } from "react";
import { Connector, useConnect } from "wagmi";
import { navConnectorStyle } from "@components/NavBar";

export const NavBarConnect: FC = () => {
  const [isReady, setIsReady] = useState(false);
  const { connectors, connect, isPending, isError } = useConnect();

  const connector: Connector = useMemo(
    () => connectors.filter(connector => connector.name === "MetaMask")[0],
    [connectors]
  );

  useEffect(() => {
    const checkIsReady = async () => {
      const provider = await connector.getProvider();
      setIsReady(!!provider);
    };

    if (connector) checkIsReady();
  }, [connector]);

  const handleConnect = () => {
    connect({ connector: connector });
  };

  return (
    <div style={{ ...navConnectorStyle, ...(isError && { color: "red" }) }}>
      {isError && <p>Error</p>}
      <button disabled={!isReady || isPending} onClick={handleConnect}>
        {isError ? "Retry" : `${isPending ? "* " : ""}${connector.name}`}
      </button>
    </div>
  );
};
