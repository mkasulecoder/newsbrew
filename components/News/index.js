import { BiNews } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { ReactDOM } from "react";
const NewsCard = (props) => {
  const { title, url, desc, name, date } = props;

  return (
    <>
      <div className='news-card my-1 p-2 bg-white col-12 d-block border-radius'>
        <span className='my-0 fs-7 text-gray fw-bold'>{name}</span>
        <div className='d-flex flex-row justify-content-between align-content-center col-12'>
          <div className='col-10'>
            <Link href={url} target='_blank' rel='noopener'>
              <h5 className='my-0 text-aqua'>{title}</h5>
            </Link>
            <p className='my-0 text-dark'>{desc}</p>
          </div>
          <div className='col-2 bg-gray-200'></div>
        </div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <span className='my-0 fs-7 text-gray'>{date}</span>
          <BiNews />
        </div>
      </div>
      <div className='col-12'>
        <hr className='col-4 text-aqua' />
      </div>
    </>
  );
};

export default NewsCard;
