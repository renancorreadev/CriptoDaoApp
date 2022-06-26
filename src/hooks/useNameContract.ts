import type { CBRNFT } from '../contracts/types';
import { useNFTContract } from './useNFTContract';

export async function useNameContract(): Promise<string> {
  const contract = useNFTContract();

  const fetch = await contract?.name;
  const resul = fetch.toString();

  return resul;
}
