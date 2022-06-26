import { useNFTContract } from '../hooks/useNFTContract';
import { useState, useEffect } from 'react';


export function usePublicCalls() {
  const [contractName, setContractName] = useState('');
  const nftContract = useNFTContract();

  useEffect(() => {
    if (nftContract) {
      nftContract.name().then((fetch) => setContractName(fetch));
    }
  }, [nftContract]);



  return { contractName };
}
