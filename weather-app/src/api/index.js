const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=fcbe0fed4e7548b6b06171929252906";

export const getWeatherdata = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherLocation = async (lat, long) => {
  const response = await fetch(`${baseUrl}&q=${lat},${long}&aqi=yes`);
  return await response.json();
};
