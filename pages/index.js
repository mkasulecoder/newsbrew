import Image from "next/image";
import NewsCardSection from "../components/NewsCardSection";
import { BsNewspaper, BsFillCloudSunFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import LocalDate from "../components/DateSection";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  return (
    <>
      <div className='main-section bg-gray-300'>
        <aside className='p-3 d-block'>
          <div className='aside-left border-radius bg-dark p-2'>
            <div className='d-flex flex-row align-items-center justify-content-start text-gray gap-2'>
              <SlCalender className='fs-1' />
              <h4>Today</h4>
            </div>
            <LocalDate />
          </div>
        </aside>
        <main className='container my-3 text-left'>
          <div className='d-block col-12'>
            <div>
              <h4 className='text-aqua'>
                Top Stories <BsNewspaper />
              </h4>
              <NewsCardSection />
            </div>
          </div>
        </main>
      </div>
      <div className='d-flex flex-row justify-content-center align-items-center p-2'>
        <p className='text-aqua'>Developed By Elite Byte Code</p>
      </div>
    </>
  );
}
