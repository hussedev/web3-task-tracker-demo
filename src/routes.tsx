import { App } from "./App";
import { ProjectDescription } from "./components/ProjectDescription";
import EthereumTasks from "./features/ethereum/EthereumTasks";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProjectDescription />
      },
      {
        path: "/ethereum",
        element: <EthereumTasks />
      }
    ]
  }
];
