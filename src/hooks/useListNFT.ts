import axios from "axios";
import { useEffect, useState } from "react";

export function useListNFT() {
  const [listNFT, setListNFT] = useState<string[]>([""]);
  const [nftURL, setNftURL] = useState<string[]>([""]);
  const [isLoading, setLoading] = useState<boolean>(true);

  let endpoints = [
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/3",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/4",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/5",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/6",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/8",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/9",
    "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/10",
  ];

  useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      setListNFT(res.map((r) => r.data.image.replace(":/", "")));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (listNFT) {
      setNftURL(listNFT.map((nft) => `https://ipfs.io/${nft}`));
    }
  }, [listNFT]);

  return { listNFT, isLoading, nftURL };
}
