import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import site from "site";

function MyApp({ Component, pageProps }: AppProps) {
  const { rootUrl, title, description, author } = site;

  const router = useRouter();
  const canonicalUrl = `${rootUrl}${
    router.asPath === "/" ? "" : router.asPath
  }`.split("?")[0];

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
