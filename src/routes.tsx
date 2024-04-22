import { App } from "./App";
import { Main } from "./pages";
import EthereumTasks from "./features/ethereum/EthereumTasks";

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
