import { useState,useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import FourcastWeather from "./FourcastWeather";
import SearchSection from "./SearchSection";
import style from "./WeatherContent.module.css";
const WeatherContent = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [error, setEror] = useState("");
  const [weather, setWeather] = useState("");
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const controller = new AbortController();
    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`,
        { signal: controller.signal }
      );
      const json = await response.json();
      setData(json);
    }
    getWeather();
  }, []);

  console.log(data);
  return (
    <div className={style.container}>
      <SearchSection
        setcityname={setCityName}
        cityName={cityName}
        setdata={setData}
        apikey={apiKey}
      />
      <CurrentWeather data={data} />
      <FourcastWeather />
    </div>
  );
};

export default WeatherContent;
