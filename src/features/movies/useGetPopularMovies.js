import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setMovies, setTotalPages, setState } from "./moviesSlice";

export const useGetPopularMovies = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const page = (params.page ? params.page : 1);
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}`;

    const retardPageLoading = () => {
        setTimeout(() => {
            dispatch(setState("success"));
        }, 1_000);
    };

    useEffect(() => {
        dispatch(setState("loading"));
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(movies => {
                dispatch(setMovies(movies.results))
                dispatch(setTotalPages(movies.total_pages))
            })
            .then(retardPageLoading())
            .catch(error => {
                dispatch(setState("error"))
                console.error("Unfortunately, something went wrong...", error)
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
};
