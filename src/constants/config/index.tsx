import { http, createConfig } from "wagmi";
import { type Chain, optimismSepolia, optimism } from "wagmi/chains";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

//[x] - 1. Get projectId at https://cloud.walletconnect.com
//[x] - you can put projectID in an .env.local instead of using it
export const projectId = "f34a7a9265b0a2846c88cc89d9407ce5";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Scroll Starter",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [optimism, optimismSepolia] as [Chain, ...Chain[]];

export const config = createConfig({
  chains,
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
});
