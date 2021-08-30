import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setMovies, setTotalPages, setState } from "./moviesSlice";

export const useGetPopularMovies = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const page = (params.page ? params.page : 1);
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}`;

    useEffect(() => {
        dispatch(setState("loading"));
        setTimeout(() => {
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
                .then(dispatch(setState("success")))
                .catch(error => {
                    dispatch(setState("Error"))
                    console.error("Niestety coś się zepsuło", error)
                });
        }, 1500);
    }, [page]);
};
