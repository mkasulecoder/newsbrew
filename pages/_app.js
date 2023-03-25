import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>News Brew | Home</title>
          <meta name='description' content='News without ads' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin='anonymous'
        ></Script>
      </Layout>
    </>
  );
}

export default MyApp;
