import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGenres } from "../moviesSlice";

export const useGetMovieGenres = () => {
    const apiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=768f7875782193f5e4797762314da0b7";
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(genres => dispatch(setGenres(genres)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};