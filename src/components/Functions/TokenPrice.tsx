import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useTokenPrice } from "../hooks/useTokenPrice";
import { parseBalance } from "../util";

export const TokenPrice = () => {
  const { data } = useTokenPrice();

  if (data) {
    return <p>Token Price: {data}</p>;
  }

  return <p>Loading...</p>;
};
