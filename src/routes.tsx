import { App } from "./App";
import { EthersTasks } from "@features/ethers";
import { Main } from "@pages";
import { ReactNode } from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

export const appChildren: Array<{ title: string; path: string; element: ReactNode }> = [
  {
    title: "Home",
    path: "/",
    element: <Main />
  },
  {
    title: "Ethers",
    path: "/eth-ethers",
    element: <EthersTasks />
  }
];

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {appChildren.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Route>
);
