import { App } from "./App";
import { Main } from "./pages";
import { EthereumTasks } from "./features/ethereum";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/ethereum",
        element: <EthereumTasks />
      }
    ]
  }
];
