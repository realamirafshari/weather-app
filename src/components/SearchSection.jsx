import style from "./SearchSection.module.css";
const SearchSection = () => {
  return (
    <div className={style.search_container}>
      <div className={style.text_box}>
        <input
          type="text"
          className={style.text_input}
          id="text_input"
          required
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
