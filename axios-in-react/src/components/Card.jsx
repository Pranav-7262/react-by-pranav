import React from "react";

const Card = ({ dataOfMovie }) => {
  const { Poster, imdbID } = dataOfMovie;
  //   console.log("getting data..");
  return (
    <div>
      <li className="hero">
        <div className="main">
          <div className="poster">
            <img src={Poster} alt={imdbID} />
          </div>
          <div>
            <div>
              <a href={`/movie/${imdbID}`}>
                <button>Watch now</button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
