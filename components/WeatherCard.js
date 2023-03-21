import { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  //Get weather data
  const weatherUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&forecast_days=3&timezone=auto";

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get(weatherUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div className='weather-card text-white my-2 p-1 w-100'>
      <h3>{weatherData.timezone}</h3>
      <h1>
        {weatherData.current_weather?.temperature}
        {weatherData.hourly_units?.temperature_2m}
      </h1>
      <p className='my-0'>
        Wind Speed: {weatherData.current_weather?.windspeed} <br />
      </p>
    </div>
  );
};

export default WeatherCard;
