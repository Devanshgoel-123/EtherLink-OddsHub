import { ConnectKitButton } from "connectkit";
import './styles.scss'; 
import { etherlink } from "viem/chains";
import { useSwitchChain } from 'wagmi'


const WalletConnectButton = () => {

  const {switchChain}=useSwitchChain();
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button onClick={()=>{
            if(show) show();
            if(chain && chain.id! == etherlink.id){
              switchChain({
                chainId : etherlink.id
              })
            }
          }}
           className={isConnected ? "wallet-connected-btn" : "wallet-connect-btn"} 
          >
            {isConnected ? address : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default WalletConnectButton;