import Head from "next/head";
import Image from "next/image";
import NewsApi from "./api/top-headlines";
import Navbar from "../components/NavMenu";
import NewsCard from "../components/NewsCard";
import News from "../components/CardSection";
import { BsNewspaper } from "react-icons/bs";
import ListPublisher from "../components/SideSection";

export default function Home() {
  return (
    <div className='main-section bg-gray-200'>
      <aside className='m-3 d-block'>
        <div className='aside-left border-radius'>
          <h4 className='text-gray'>Breaking News</h4>
          <ListPublisher />
        </div>
      </aside>
      <main className='container bg-white my-3 text-left'>
        <div className='d-block py-2 w-100'>
          <h4 className='text-gray fs-3'>Your Briefing</h4>
          <span className='text-gray'>Date, MM, YYYY</span>
          <hr />
        </div>
        <div className='d-block col-12'>
          <div className=''>
            <h4 className='text-aqua'>
              Top Stories <BsNewspaper />
            </h4>
            <News />
          </div>
        </div>
      </main>
      <aside className='m-3'>
        <div className='aside-right border-radius'>
          <h4 className='text-gray'>Categories</h4>
        </div>
      </aside>
    </div>
  );
}
