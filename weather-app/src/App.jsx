import Input from "./components/Input";
import Card from "./components/Card";
import Button from "./components/Button";
import { useEffect } from "react";
import { useWeather } from "./context/Weather";
import "./App.css";

function App() {
  const weather = useWeather();
  console.log("weather:", weather);

  useEffect(() => {
    weather.getusercurrentlocation();
  }, []);

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="search" />
      <Card />
      <Button value="refresh" />
    </div>
  );
}

export default App;
