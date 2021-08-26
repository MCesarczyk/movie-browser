import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "./moviesSlice";

export const useGetMovieDetails = (movie_id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=768f7875782193f5e4797762314da0b7`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(movie => dispatch(setMovie(movie)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};