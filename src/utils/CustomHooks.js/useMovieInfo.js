import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constaint";
import {addMovieInfo}   from "../moviesSlice";

const useMovieInfo = (id) => {
    const fetch = require('node-fetch');
    const dispatch = useDispatch();
    const fetchMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS );
        const json = await data.json();
        
        dispatch(addMovieInfo(json));
        console.log("Anurag");
        console.log(json);
    }            
    useEffect(() => {
        fetchMovie();
    },[]);

}

export default useMovieInfo;