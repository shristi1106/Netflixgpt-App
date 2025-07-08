import React from 'react'
import { useSelector } from 'react-redux'
import useMovieInfo from '../../utils/CustomHooks.js/useMovieInfo';
import { useParams } from 'react-router-dom';
import MovieInfoContainer from './MovieInfoContainer';
import { BANNER_IMG_CDN_URL, LOGO } from '../../utils/constaint';
import MovieVideos from './MovieVideo';
import lang from '../../utils/LanguageConstaints';

const MovieInfo = () => {

  const { id } = useParams();
  console.log(id);
  useMovieInfo(id);
  const langKey = useSelector((store) => store.config.lang);
  
  const info = useSelector(store => store.movies?.movieInfo);
  console.log(info);
  return(
       <div>
        
        <div className="absolute  px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="logo" className=" mx-auto md:mx-0 w-44"></img>
      <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {lang[langKey].logout}
            </div>

      </div>
            
        <div className="w-full min-h-[110vh] md:min-h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img className="h-[110vh] md:h-auto object-cover mx-auto brightness-[.3]" src={BANNER_IMG_CDN_URL + info?.backdrop_path} alt="moviebg" />
      </div>
         
        <MovieInfoContainer  info={info}/>
        <MovieVideos id={info?.id} />


</div>
      

  )

};



export default MovieInfo;
