import CurrentWeather from "./CurrentWeather";
import FourcastWeather from "./FourcastWeather";
import SearchSection from "./SearchSection";
import style from "./WeatherContent.module.css";
const WeatherContent = () => {
  return <div className={style.container}>
    <SearchSection/>
    <CurrentWeather/>
    <FourcastWeather/>
  </div>;
};

export default WeatherContent;
