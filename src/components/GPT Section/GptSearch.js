import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSggestion from "./GptSggestion";
import { BG_URL } from "../../utils/constaint";

const GptSearch = () => {
  return (
    <>
     <div className=" fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="img"
        ></img>
      </div>
      <div>
      <GptSearchBar />
      <GptSggestion />
    </div>
    </>
    
  );
};

export default GptSearch;
