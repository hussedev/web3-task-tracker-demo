import { EthersConnector } from "@features/ethers";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const NavBarConnector: FC = () => {
  return (
    <Routes>
      <Route path="/eth-ethers" element={<EthersConnector />} />
    </Routes>
  );
};
