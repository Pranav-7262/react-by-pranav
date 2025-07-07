import React from "react";
import Card from "../components/Card";
import { getMovie } from "../service/GetService";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setdata] = useState([]);

  const movieData = async () => {
    try {
      const response = await getMovie();
      console.log("response : ", response.data.Search);
      setdata(response.data.Search);
    } catch (error) {
      console.log("error message : ", error.message);
      console.log("error status : ", error.response.status);
      console.log("error data :", error.response.data);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <ul className="container grid grid-cols-6 p-3 m-4">
      {data.map((element) => {
        return <Card key={element.imdbID} dataOfMovie={element} />;
      })}
    </ul>
  );
};

export default Movie;
