import style from "./CurrentWeather.module.css";
const CurrentWeather = () => {
  return (
    <div className={style.current_weather_container}>
      <div className={style.city_date_info}>
        <h1>Bam , ir</h1>
        <h3> web , november 15 - 20:20</h3>
      </div>
      <div className={style.current_weather_info}>
        <img src="./678310.png" alt="" />
        <div className={style.tempture}>
          <h1 className={style.weather_temperature}>
            <span>21</span> °C
          </h1>
          <h3>Rainy</h3>
        </div>
      </div>
      <div className={style.weather_more_info}>
        <h3>Humadity : 23 </h3>
        <h3>fells Good : 45 </h3>
        <h3>Min / Max : 12 - 34 </h3>
      </div>
    </div>
  );
};

export default CurrentWeather;
