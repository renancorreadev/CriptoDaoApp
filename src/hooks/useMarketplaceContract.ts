import ABI from "../contracts/artifacts/Marketplace.sol/Marketplace.json";
import type { Marketplace } from "../contracts";
import useContract from "./useContract";

type marketPlaceAddress = "0x611A9Eb67A4289fFb8cb3FBdbAd6B90Cfd31a02c";

export function useMarketplaceContract() {
  const NFTAddress: marketPlaceAddress =
    "0x611A9Eb67A4289fFb8cb3FBdbAd6B90Cfd31a02c";
  return useContract<Marketplace>(NFTAddress, ABI.abi);
}
