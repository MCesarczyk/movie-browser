import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectPage, setMovies } from "./moviesSlice";

export const useGetPopularMovies = () => {
    const page = useSelector(selectPage);
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}&language=en-US`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(movies => dispatch(setMovies(movies.results)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};