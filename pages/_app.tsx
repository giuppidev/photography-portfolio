import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Roberto De Martino</title>
        <meta name="description" content="Roberto De Martino - fotografo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
