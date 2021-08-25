import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppendMovieDetails } from "./moviesSlice";

export const useGetMoviesDetails = (movieList) => {
    const dispatch = useDispatch();

    const getMovieDetails = async (movie_id) => {
        const apiURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=768f7875782193f5e4797762314da0b7`;
        const response = await fetch(apiURL);
        const details = await response.json();
        dispatch(setAppendMovieDetails(details));
    };

    const getMoviesDetails = () => {
        movieList.forEach((element, index) => {
            getMovieDetails(movieList[index].id);
        });
    };

    useEffect(() => {
        getMoviesDetails();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieList]);
};