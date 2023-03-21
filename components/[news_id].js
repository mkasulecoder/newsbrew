import { BiNews } from "react-icons/bi";
import { useRouter } from "next/router";

const NewsDetail = (props) => {
  //   const { title, desc, content, url, date, name, detailKey } = props;

  return (
    <div className='news-card py-1 bg-white col-12 d-block'>
      <span className='my-0 fs-7 text-gray fw-bold'>{name}</span>
      <a href='{url}'>
        <h5 className='my-0 text-aqua'>{title}</h5>
      </a>
      <p className='my-0 text-dark'>{desc}</p>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <span className='my-0 fs-7 text-gray'>{date}</span>
        <BiNews />
      </div>
    </div>
  );
};

export default NewsDetail;
