import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../utils/getLibrary";

import "@fontsource/press-start-2p";
import "@fontsource/roboto";
import "@fontsource/rubik-mono-one";
import "@fontsource/comfortaa";

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
