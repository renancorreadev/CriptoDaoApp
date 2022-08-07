import { useMarketplaceContract } from "./useMarketplaceContract";

interface CreateCollectionProps {
  salt: string;
  name: string;
  symbol: string;
  seller: string;
}

export function useWriteContract() {
  const marketContract = useMarketplaceContract();

  const createCollection = async ({
    salt,
    name,
    symbol,
    seller,
  }: CreateCollectionProps) => {
    const tx = await marketContract?.createCollection(
      salt,
      name,
      symbol,
      seller
    );
    tx?.wait();
    return tx?.confirmations;
  };

  return { createCollection };
}
