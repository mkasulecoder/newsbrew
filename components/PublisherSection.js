import { useState, useEffect } from "react";
import axios from "axios";
import Publisher from "./Publishers";

const ListPublisher = () => {
  //Instantiate Date
  //Instantiate Date
  const [publisherDate, setPubDate] = useState(new Date());

  //Assign Data
  useEffect(() => {
    let timer = setInterval(() => setPubDate(new Date()), 1000);
    return function clearTime() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className='d-block justify-content-center'>
        <h1 className='my-0'>{publisherDate.toLocaleTimeString()}</h1>
        <h6 className='my-0 text-aqua'>{publisherDate.toDateString()}</h6>
      </div>
    </div>
  );
};

export default ListPublisher;
