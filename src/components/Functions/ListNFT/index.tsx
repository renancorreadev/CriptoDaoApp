import React from "react";
import { useListNFT } from "../../../hooks/useListNFT";

export function ListNFT() {
  const { nftURL } = useListNFT();
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {nftURL.map((nftItem, i) => {
        return <img key={i} src={nftItem} />;
      })}
    </div>
  );
}
