import Layout from '../components/Layout';
import '../styles/globals.scss';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
