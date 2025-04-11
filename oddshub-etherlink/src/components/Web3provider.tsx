import { WagmiProvider, createConfig, http } from "wagmi";
import { etherlink} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

export const config = createConfig(
  getDefaultConfig({
    chains: [etherlink],
    transports: {
      [etherlink.id]:http(
        "https://node.mainnet.etherlink.com"
      )
    },
    walletConnectProjectId: "c0d339ed8343fed3a39dd6795c2244b8",
    appName: "BaseForeCast",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }:{ children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
