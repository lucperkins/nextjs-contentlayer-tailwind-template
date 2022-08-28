import { Head, Html, Main, NextScript } from "next/document"

import Layout from "../components/Layout"

type Props = {}

const Document = ({}: Props) => {
  return (
    <Html className="h-screen">
      <Head />
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
