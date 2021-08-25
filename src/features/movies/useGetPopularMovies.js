import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies, setMoviesState } from "./moviesSlice";

export const useGetPopularMovies = () => {
    const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7";
    const dispatch = useDispatch();

    useEffect(() => {
        const getPopularMovies = () => {

            fetch(apiURL)
                .then(response => response.json())
                .then(movies => dispatch(setMovies(movies.results)))
                .then(() => dispatch(setMoviesState("success")))
        };

        setTimeout(getPopularMovies, 2_000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};