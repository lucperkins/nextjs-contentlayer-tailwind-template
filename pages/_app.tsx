import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

import { title } from "../site"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
