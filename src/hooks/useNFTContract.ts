import ABI from "../contracts/artifacts/SocialCryptoArt.sol/SocialCryptoArt.json";
import type { SocialCryptoArt } from "../contracts/";
import useContract from "./useContract";

type NFTAddress = '0x90dff05D1C2858EA59be15B4bF63Dab2298A547d';

export function useNFTContract() {
  const NFTAddress: NFTAddress = '0x90dff05D1C2858EA59be15B4bF63Dab2298A547d';
  return useContract<SocialCryptoArt>(NFTAddress, ABI.abi);
}
