import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MoviesList";

const GptSggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  console.log(movieName);
  if(!movieName) return null;

  return (
    <div className="p-4 md:px-8 px-2 m-4 md:my-7 bg-black bg-opacity-80 text-white ">
      <div className=" backdrop-filter bg-opacity-50 rounded-lg">
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSggestion;
