import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "./moviesSlice";

export const useGetMovieDetails = (movie_id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=768f7875782193f5e4797762314da0b7`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(details => dispatch(setMovieDetails(details)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};