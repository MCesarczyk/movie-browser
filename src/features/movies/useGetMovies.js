import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { setMovies } from "./moviesSlice";
import searchQueryParamName from "../Navigation/Search/searchQueryParamName";
import { setState, setTotalPages } from "../../globalSlice";

export const useGetMovies = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
    const page = (params.page ? params.page : 1);

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const apiURL = (query ?
        `https://api.themoviedb.org/3/search/movie?api_key=768f7875782193f5e4797762314da0b7&language=en-US&query=${query}&page=${page}&include_adult=false`
        :
        `https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}&language=en-US`)

    const retardPageLoading = () => {
        setTimeout(() => {
            dispatch(setState("success"));
        }, 1_000);
    };

    useEffect(() => {
        query && history.push(`/movies/1?${searchQueryParamName}=${query}`)
    }, [query]);

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
                dispatch(setTotalPages(movies.total_pages))
                dispatch(setMovies(movies.results))
            })
            .then(retardPageLoading())
            .catch(error => {
                dispatch(setState("error"))
                console.error("Unfortunately, something went wrong...", error)
            });
    }, [page, query]);
};