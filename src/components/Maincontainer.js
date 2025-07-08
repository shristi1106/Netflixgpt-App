import React from 'react'

import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
  
      const movies = useSelector((store) => store.movies?.nowPlayingMovies);

      if(!movies) return ;
      const mainMovies = movies[1];
     

      const {original_title , overview, id } = mainMovies;

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      < VideoTitle title ={original_title} overview = {overview} />
      <VideoBackground movieId = {id} />
    </div>
  )
}

export default Maincontainer
