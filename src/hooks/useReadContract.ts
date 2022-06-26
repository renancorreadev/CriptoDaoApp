import { useNFTContract } from "./useNFTContract";
import { useState, useEffect } from "react";

type SymbolsFetch = string;

export function useReadContract() {
  const [contractName, setContractName] = useState("");
  const [symbol, setSymbol] = useState<SymbolsFetch>();
  const nftContract = useNFTContract();

  const getSymbols = async (): Promise<string> => {
    const symbols = await nftContract.symbol();
    return symbols;
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

  return { contractName, symbol, nftContract };
}
