import type { AppProps } from "next/app"
import Head from "next/head"

import "@/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DND playground</title>
        <meta name="description" content="Learn Drag add Drop" />
        <meta property="og:type" key="type" content="website" />
        <meta
          property="og:site_name"
          key="site_name"
          content="dnd-playground"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div></div>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
