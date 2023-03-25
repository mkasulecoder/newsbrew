import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewsCard from "./News";

function NewsCardSection() {
  //Instantiate Data
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/news")
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
  }, []);
  return (
    <>
      <div className='news-feed'>
        {newsData &&
          newsData.map((news, id) => (
            <NewsCard
              title={news.title}
              url={news.url}
              desc={news.description}
              name={news.name}
              date={news.publishedAt}
              // image={news.props.image}
              key={id}
            />
          ))}
      </div>
    </>
  );
}

export default NewsCardSection;
