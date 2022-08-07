/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNFTContract } from "./useNFTContract";
import { useState, useEffect } from "react";
import { useMarketplaceContract } from "./useMarketplaceContract";

type SymbolsFetch = string;

export function useReadContract() {
  const [contractName, setContractName] = useState("");
  const [symbol, setSymbol] = useState<SymbolsFetch>();
  const [allNFT, setAllNFT] = useState<unknown>();

  /* Markeplace  */
  const [contractDeployed, setContractDeployed] = useState<unknown>("");
  const nftContract = useNFTContract();
  const marketplaceContract = useMarketplaceContract();

  const getSymbols = async (): Promise<string> => {
    const symbols = await nftContract?.symbol();
    //@ts-ignore
    return symbols;
  };

  const getDeployed = async () => {
    const fetch = await marketplaceContract?.getDeployed("SocialCryptoArt");
    return fetch;
  };

  const getAllCollection = async () => {
    const fetch = await marketplaceContract?.filters.MarketItemSold;
    return fetch;
  };

  useEffect(() => {
    if (nftContract) {
      nftContract.name().then((fetch) => setContractName(fetch));
    }
  }, [nftContract]);

  useEffect(() => {
    if (nftContract) {
      getSymbols().then((fetch) => setSymbol(fetch));
    }
  }, [nftContract]);

  useEffect(() => {
    if (marketplaceContract) {
      getDeployed().then((fetch) => setContractDeployed(fetch));
      getAllCollection().then((fetch) => setAllNFT(fetch));
    }
  }, [marketplaceContract]);

  return { contractName, symbol, nftContract, contractDeployed, allNFT };
}
