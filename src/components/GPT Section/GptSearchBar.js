import React, { useRef } from "react";
import lang from "../../utils/LanguageConstaints";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GIMINI_API_KEY } from "../../utils/constaint";
import { addGptMovieResult } from "../../utils/gptSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const genAI = new GoogleGenerativeAI(GIMINI_API_KEY);
  const langKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    console.log(movie);

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=%22" +
        movie +
        "%22&include_adult=false&page=1&sort_by=popularity.desc",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchText = search.current.value;
    console.log(searchText);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a Movie Recomendation system and suggest some movies for the prompt : " +
      searchText +
      ". Only give me name of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text.split(","));

    const giminiMovie = text.split(",");

    const promiseArray = giminiMovie.map((movie) => searchMovieTMDB(movie));
    console.log(promiseArray);

    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(
      addGptMovieResult({
        movieName: giminiMovie,
        movieResults: tmdbResult,
      })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-1/2  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-3 col-span-9 rounded-l-full outline-none text-center  sm:text-base font-bold text-xl"
        />
        <button
          className="col-span-3 py-2  px-4 bg-red-700 hover:bg-red-800 text-white rounded-r-full font-bold"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
