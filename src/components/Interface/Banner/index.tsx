import React from "react";

import Image from "next/image";
import { WalletConnect } from "../../Functions/WalletConnect";

export function Banner() {
  return (
    <div className="bg-purple-300 w-[100%] h-[500px] banner">
      <div className="flex flex-col items-center ">
        <div className="mt-[7.75rem] mx-[6.58rem] ">
          <Image
            src="/fonts/title-banner.svg"
            alt="title-banner"
            width="1093"
            height="47"
          />
        </div>

        <div className="flex flex-col justify-center mb-[4.25rem] ">
          <span className="text-sm text-white font-confortaa text-center">
            Dê protagonismo a artistas periféricos e apoie ações sociais
          </span>
          <span className="text-sm text-white font-confortaa text-center">
            de impacto através da arte e tenocnologia
          </span>
        </div>

        <div>
          <WalletConnect className="bg-purple-400 text-white font-confortaa text-center p-2 ml-8 hover:bg-purple-300 hover:text-purple-900 transition-colors" />
          <button className="bg-purple-400 text-white font-confortaa text-center p-2 ml-8 hover:bg-purple-300 hover:text-purple-900 transition-colors">
            <span>Aprenda sobre NFTs</span>
          </button>
        </div>
      </div>
    </div>
  );
}
