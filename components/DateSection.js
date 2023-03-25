import { useState, useEffect } from "react";

const LocalDate = () => {
  //Instantiate Date
  //Instantiate Date
  const [publisherDate, setPubDate] = useState(new Date());
  //Assign Data
  useEffect(() => {
    let timer = setInterval(() => setPubDate(new Date()), 1000);
  }, []);

  return (
    <>
      <div className='d-block justify-content-center text-white'>
        <h1 className='my-0'>{publisherDate.toLocaleTimeString()}</h1>
        <h6 className='my-0 text-gray'>{publisherDate.toDateString()}</h6>
      </div>
    </>
  );
};

export default LocalDate;
