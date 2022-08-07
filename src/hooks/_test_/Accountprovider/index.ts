import { ethers } from "ethers";
import { abi } from "../../../contracts/artifacts/SocialCryptoArt.sol/SocialCryptoArt.json";
import { Contract } from "@ethersproject/contracts";

export const AccountProvider = () => {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
  const provider = new ethers.providers.InfuraProvider(
    process.env.NEXT_PUBLIC_NETWORK,
    process.env.NEXT_PUBLIC_API_KEY
  );
  const privateKey =
    process.env.NEXT_PUBLIC_PRIVATE_KEY || "YOUR PRIVATE KEY WALLET";

  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);
  const contract = new Contract(contractAddress, abi, signer);

  return { contract, signer, wallet, provider };
};
