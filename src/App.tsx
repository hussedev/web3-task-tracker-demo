import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@lib/wagmi";
import { Footer, Header, NavBar } from "@components";
import { TaskTrackerProvider } from "@contexts/taskTracker";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <TaskTrackerProvider>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <NavBar />
            <main style={{ flex: 1 }}>
              <Outlet />
            </main>
            <Footer />
          </div>
        </TaskTrackerProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
