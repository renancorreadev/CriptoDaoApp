import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../utils/connectors";
import useENSName from "../../../hooks/useENSName";
import useMetaMaskOnboarding from "../../../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../../../utils/util";
import { MetamaskButton } from "../../Reusables/MetamaskButton";

type WalletConnectProps = {
  className?: string;
};
export const WalletConnect = ({ className }: WalletConnectProps) => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  const [metamaskInstalled, setMetamaskInstalled] = useState("");

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  function statusConnect() {
    setConnecting(true);
    activate(injected, undefined, true).catch((error) => {
      // ignore the error if it's a user rejected request
      if (error instanceof UserRejectedRequestError) {
        setConnecting(false);
      } else {
        setError(error);
      }
    });
  }

  useEffect(() => {
    if (isMetaMaskInstalled) {
      setMetamaskInstalled("Connect to MetaMask");
    } else {
      setMetamaskInstalled("Install MetaMask");
    }
  }, [isMetaMaskInstalled]);

  if (typeof account !== "string") {
    return (
      <>
        {isWeb3Available ? (
          <MetamaskButton
            className={className}
            disabled={connecting}
            onClick={statusConnect}
          >
            {metamaskInstalled}
          </MetamaskButton>
        ) : (
          <MetamaskButton className={className} onClick={startOnboarding}>
            {metamaskInstalled}
          </MetamaskButton>
        )}
      </>
    );
  }

  return (
    <a
      className="text-white font-confortaa "
      {...{
        href: formatEtherscanLink("Account", [chainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      <span className="">{ENSName || `${shortenHex(account, 4)}`}</span>
    </a>
  );
};
