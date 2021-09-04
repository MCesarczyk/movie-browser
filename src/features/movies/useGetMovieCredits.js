import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieCredits } from "./moviesSlice";

export const useGetMovieCredits = (movie_id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(credits => dispatch(setMovieCredits(credits)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};