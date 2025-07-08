import React from 'react'
import { IMG_CDN_URL } from '../utils/constaint';

const MoviesCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4 transition-transform transform hover:scale-90 cursor-pointer">
        <img alt='movies' src= {IMG_CDN_URL + posterPath} 
         className='object-cover rounded-lg'
        />
      
    </div>
  )
}

export default MoviesCard;
