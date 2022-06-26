import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import useTokenBalance from '../../hooks/useTokenBalance';

import type { AuctionCreator } from '../../contracts/types';
import AuctionABI from '../../contracts/AuctionCreator.json';
import useContract from '../../hooks/useContract';

export const CreateAuction = () => {
  const ContractAddress = '0x06219987679Cb43C55188f00b065925cBe06Cd7A';
  const contract = useContract<AuctionCreator>(ContractAddress, AuctionABI.abi);

  async function CreateAuction() {
    const tx = await contract.createAuction();
    tx.wait();
  }

  return <button onClick={CreateAuction}>Create Auction</button>;
};
