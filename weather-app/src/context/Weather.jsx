import React from "react";
import { getWeatherdata, getWeatherLocation } from "../api";
import { createContext, useContext, useState } from "react";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};
export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchCity, setsearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherdata(searchCity);
    setdata(response);
  };
  const getusercurrentlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setdata(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        searchCity,
        setsearchCity,
        fetchData,
        getusercurrentlocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
