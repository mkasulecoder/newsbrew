import { useState, useEffect } from "react";
import axios from "axios";
const apiKey = process.env.PRIVATE_API_KEY;
const apiUrl = "https://newsapi.org/v2/everything?q=&apiKey=$`apiKey`";

console.log(apiUrl);
const ListPublisher = () => {
  //Instantiate Data
  const [publisher, setNewsPublisher] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsPublisher(response.data.articles);
      })
      .catch((error) => {
        error.response.data;
      });
  }, []);
  return (
    <div>
      <ul>
        {publisher &&
          publisher.map((pub, id) => {
            <li
              name={pub.source.name}
              key={pub.source.id}
              className='text-aqua'
            >
              {pub.source.name}
            </li>;
          })}
      </ul>
    </div>
  );
};

export default ListPublisher;
