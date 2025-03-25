import style from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  const {
    cod,
    name,
    dt,
    weather = [{ description: "No description available" }],
    sys: { country } = {},
    main: { temp } = {},
  } = data || {};

  if (cod === "404" || !data) {
    return (
      <>
        <h3>Not Found</h3>
      </>
    );
  } else {
    return (
      <div className={style.current_weather_container}>
        <div className={style.city_date_info}>
          <h1>
            {name} - {country}
          </h1>
          <h3>{new Date(dt * 1000).toLocaleString()}</h3>
        </div>
        <div className={style.current_weather_info}>
          <img src="./678310.png" alt="weather icon" />
          <div className={style.temperature}>
            <h1 className={style.weather_temperature}>
              <span>{Math.floor(temp)}</span> °C
            </h1>
            <h3>{weather[0].description}</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
