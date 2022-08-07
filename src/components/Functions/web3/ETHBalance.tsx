/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "@hooks/useETHBalance";
import { parseBalance } from "@utils/util";

/** Stylings Components */
import { styled } from "@stitches/react";

const BalanceText = styled("p", {
  color: "#000",
  fontSize: "1rem",
  margin: "0.5rem",
});

export const ETHBalance = () => {
  const { account } = useWeb3React<Web3Provider>();
  //@ts-ignore
  const { data } = useETHBalance(account);

  return <BalanceText>Balance: Ξ {parseBalance(data ?? 0)}</BalanceText>;
};
