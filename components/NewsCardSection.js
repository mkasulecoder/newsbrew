import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const apiKey = process.env.PRIVATE_API_KEY;
const apiUrl =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=743db947f4024af89745387004172edb";
console.log(apiKey);

function News() {
  //Instantiate Data
  const [newsData, setNewsData] = useState([]);

  //Assign Data
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        error.response.data;
      });
  }, []);

  return (
    <div>
      <div className='news-feed'>
        {newsData &&
          newsData.map((news, id) => (
            <NewsCard
              title={news.title}
              desc={news.description}
              content={news.content}
              url={news.url}
              date={news.publishedAt}
              name={news.source.name}
              key={news.source.id}
            />
          ))}
      </div>
    </div>
  );
}

export default News;
