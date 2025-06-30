import React from "react";
import { useWeather } from "../context/Weather";
const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} />
      <p>{weather?.data?.current?.condition?.text}</p>
      <h2>{weather?.data?.current?.temp_c} C</h2>
      <h5>
        {weather?.data?.location?.name} , {weather?.data?.location?.region} ,{" "}
        {weather?.data?.location?.country}
      </h5>

      <h3>Localtime : {weather?.data?.location?.localtime}</h3>
    </div>
  );
};

export default Card;
