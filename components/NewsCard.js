import { BiNews } from "react-icons/bi";
const NewsCard = (props) => {
  const { title, desc, content, url, date, name, key } = props;
  return (
    <div className='news-card py-1 bg-white col-12 d-block'>
      <span className='my-0 fs-7 text-aqua'>{name}</span>
      <a href='{url}'>
        <h5 className='my-0 text-dark'>{title}</h5>
      </a>
      <p className='my-0 text-dark'>{desc}</p>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <span className='my-0 fs-7 text-gray'>{date}</span>
        <BiNews />
      </div>
    </div>
  );
};

export default NewsCard;
