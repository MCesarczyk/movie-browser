import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setMovie } from "./moviesSlice";

export const useGetMovieDetails = () => {
    const { id } = useParams();
    const movieId = id;
    const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(movie => dispatch(setMovie(movie)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};