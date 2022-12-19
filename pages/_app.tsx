import { useEffect, useState } from "react";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import LoadingScreen from "../components/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
