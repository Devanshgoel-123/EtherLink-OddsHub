"use client";

import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import { MarketProvider } from "./context/MarketProvider";
import { SnackbarProvider } from "notistack";
import CustomToastWrapper from "@/components/Toast/Wrapper";
import HeaderMobile from "@/components/Header/HeaderMobile";
import { Web3Provider } from "@/components/Web3provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
      <title>OddsHub | Turn Insights into Income</title>
        <meta
          name='OddsHub'
          content='On-chain prediction market on the EtherLink ecosystem.'
        />
        <link rel="icon" href="/assets/logos/oddshublogo.png" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} color='#2043cf' />
        <Web3Provider>
          <Header />
          <HeaderMobile />
          <MarketProvider>
            <SnackbarProvider
              maxSnack={2}
              Components={{
                //@ts-ignore
                custom: CustomToastWrapper,
              }}
            >
              <main
                style={{
                  flex: "1",
                  width: "100%",
                  height: "100%",
                  overflowY: "scroll",
                }}
              >
                {children}
              </main>
            </SnackbarProvider>
          </MarketProvider>
          </Web3Provider>
      </body>
    </html>
  );
}
