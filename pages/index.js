import Head from "next/head";
import Image from "next/image";
import NewsApi from "./api/top-headlines";
import Navbar from "../components/NavMenu";
import NewsCard from "../components/NewsCard";
import News from "../components/NewsCardSection";
import { BsNewspaper, BsFillCloudSunFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import ListPublisher from "../components/PublisherSection";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  return (
    <div className='main-section bg-dark'>
      <aside className='m-3 d-block'>
        <div className='aside-left border-radius text-white'>
          <div className='d-flex flex-row align-items-center justify-content-start gap-2'>
            <SlCalender className='fs-1' />
            <h4 className='text-gray-100'>Today</h4>
          </div>
          <ListPublisher />
        </div>
      </aside>
      <main className='container bg-white border-radius my-3 text-left'>
        <div className='d-flex flex-row justify-content-between align-items-center mt-2 w-100'>
          <i className='text-gray fs-5 text-italic'>
            Hi, here is your personalized briefing...
          </i>
          <Image
            src='/news.png'
            width='40'
            height='40'
            alt='News Logo Header'
          />
        </div>
        <hr />
        <div className='d-block col-12'>
          <div>
            <h4 className='text-aqua'>
              Top Stories <BsNewspaper />
            </h4>
            <News />
          </div>
        </div>
      </main>
      <aside className='m-3 d-flex flex-column justify-content-between'>
        <div className='aside-right border-radius'>
          <BsFillCloudSunFill className='text-teal fs-3' />
          <WeatherCard />
        </div>
        <div>
          <span className='text-aqua'>Developed By Elite Byte Code</span>
        </div>
      </aside>
    </div>
  );
}
