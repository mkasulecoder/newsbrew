import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
const apiUrl = "https://www.boredapi.com/api/activity/";

function NewsApi() {
  //Assign Data
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        error.response.data;
      });
  }, []);

  return (
    <div>
      {newsData.map((news) => {
        <h1>{news.title}</h1>;
        console.log(title);
        <NewsCard title={news.title} />;
      })}
    </div>
  );
}

export default NewsApi;
