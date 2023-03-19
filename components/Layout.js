import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>News Brew | Home</title>
        <meta name='description' content='News without ads' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>{children}</main>

      {/* Bootstrap Scripts */}
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
        crossOrigin='anonymous'
      ></Script>
    </div>
  );
};

export default Layout;
