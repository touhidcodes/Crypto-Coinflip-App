import React, { useEffect } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const WalletConnection: React.FC = () => {
  const { activate, active, account, library } = useWeb3React();


  return (
    <div>
      {active ? (
        <div>
          <p>Connected Account: {account}</p>
        </div>
      ) : (
        <button onClick={() => activate(injected)}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnection;
