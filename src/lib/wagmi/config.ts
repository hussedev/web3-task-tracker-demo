import { http, createConfig } from "wagmi";
import { localhost } from "wagmi/chains";

export const config = createConfig({
  chains: [localhost],
  transports: {
    [localhost.id]: http("https://127.0.0.1:9545")
  }
});
