import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NewsApi from "./api/top-headlines";
import Navbar from "../components/NavMenu";

export default function Home() {
  return (
    <div>
      <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 col-12'>
        <aside className='bg-dark col-lg-2 col-md-2 col-sm-0 d-block p-3'>
          <NewsApi />
        </aside>
        <main className='col-lg-10 col-md-10 col-sm-12 bg-white d-block'>
          <h1>News Brew</h1>
          <NewsApi />
        </main>
      </div>
    </div>
  );
}
