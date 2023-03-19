import axios from "axios";
import { useState, useEffect } from "react";
// const apiUrl =
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=${env.APIkey}";
const apiUrl = [
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Kyle Wiggers",
    title:
      "OpenAI unleashes GPT-4, SVB files for bankruptcy, and a PE firm acquires Pornhub",
    description:
      "In this edition of Week in Review, we recap OpenAI's release of GPT-4, SVB filing for bankruptcy, and a PE firm acquiring PornHub's parent company.",
    url: "https://techcrunch.com/2023/03/18/openai-unleashes-gpt-4-svb-files-for-bankruptcy-and-a-pe-firm-acquires-pornhub/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1203141035-e1656450996554.jpg?resize=1200,723",
    publishedAt: "2023-03-18T20:16:49Z",
    content:
      "Welcome to Week in Review, folks, TechCrunch’s regular recap of the week in tech. GPT-4, OpenAI’s text- and image-understanding AI, might’ve dominated the headlines over the past few days. But fresh … [+7185 chars]",
  },
];
function NewsApi() {
  //Assign Data
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        error.response.data;
      });
  }, []);
  return (
    <div>
      <button
        className='btn btn-warning'
        onClick={() => {
          // console.log(newsData);
        }}
      >
        Get Data
      </button>
    </div>
  );
}

export default NewsApi;
