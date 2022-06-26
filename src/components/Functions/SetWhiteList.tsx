import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import useTokenBalance from '../../hooks/useTokenBalance';
import { useForm, SubmitHandler } from 'react-hook-form';

import type { CBRNFT } from '../../contracts/nftTypes/typechain';
import NFTABI from '../../contracts/CBRNFT.json';
import useContract from '../../hooks/useContract';
import { useState, useEffect } from 'react';

type Inputs = {
  setWhiteList: string;
};

export const SetWhiteList = () => {
  const ContractAddress = '0xe2194a0F7Fd145c405cc8fFF0BC5FcEd4b70929b';
  const contract = useContract<CBRNFT>(ContractAddress, NFTABI.abi);
  const [value, setValue] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setValue(data.setWhiteList);
    changueWLStatus(value);
  };

  const changueWLStatus = async (value) => {
    const tx = await contract.setWhitelistMintEnabled(value);
    tx.wait();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Set WhiteList Open or Close </label>
      <input {...register('setWhiteList', { required: true })} />
      <input type='submit' />
    </form>
  );
};
