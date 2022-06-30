import '../styles/globals.scss'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta charset="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
