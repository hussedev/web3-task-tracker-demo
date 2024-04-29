import { FC } from "react";
import { useAccount } from "wagmi";
import { InputForm } from "@components";

export const Main: FC = () => {
  const { isConnected } = useAccount();

  const handleSubmit = () => {};

  return (
    <div style={{ margin: "10px" }}>
      {isConnected ? (
        <InputForm
          disabled={!isConnected}
          onSubmit={handleSubmit}
          placeholder="Enter contract address"
          buttonText="Find"
        />
      ) : (
        <p>Not connected</p>
      )}
    </div>
  );
};
