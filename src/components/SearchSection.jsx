import { useEffect, useState } from "react";
import style from "./SearchSection.module.css";

const SearchSection = ({ setcityname, cityName, setdata,apikey }) => {

  useEffect(() => {
    const controller = new AbortController();
    if (!cityName) return;
    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`,
        { signal: controller.signal }
      );
      const json = await response.json();
      setdata(json);
    }
    getWeather();
  }, [cityName]);

  
  return (
    <div className={style.search_container}>
      <div className={style.text_box}>
        <input
          type="text"
          className={style.text_input}
          id="text_input"
          required
          onChange={(e) => setcityname(e.target.value)}
        />
        <label htmlFor="text_input" className={style.text_box_placeholder}>
          Enter Your City Name ...
        </label>
        <span className={`material-icons ${style.search_icon}`}>search</span>
      </div>
      <button className={style.search_location}>
        <span className="material-icons">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
