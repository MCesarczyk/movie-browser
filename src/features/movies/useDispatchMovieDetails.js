import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "./moviesSlice";

export const useDispatchMovieDetails = (movieList) => {
    const dispatch = useDispatch();

    let moviesDetails = [];

    const getMovieDetails = async (movie_id) => {
        const apiURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=768f7875782193f5e4797762314da0b7`;
        const response = await fetch(apiURL);
        const details = await response.json();
        moviesDetails.push(details);
    };

    const dispatchMovieDetails = () => {
        movieList.forEach((element, index) => {
            getMovieDetails(movieList[index].id);
        });
    };


    useEffect(() => {
        dispatchMovieDetails();

        setTimeout(() => {
            dispatch(setMovieDetails(moviesDetails));
            // console.log(moviesDetails); 
        }, 2_000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


};