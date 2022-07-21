import { SessionProvider } from "next-auth/react"
import Layout from "../components/layout/layout"
import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta charSet="utf-8" />
      </Head>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
    </>
  )
}

export default MyApp
