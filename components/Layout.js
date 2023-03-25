import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Bootstrap Scripts */}
    </>
  );
};

export default Layout;
