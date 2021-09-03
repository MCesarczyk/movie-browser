import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { setMovies } from "./moviesSlice";
import { setState, setTotalPages } from "../../globalSlice";

export const useGetPopularPeople = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const page = (params.page ? params.page : 1);
    const apiURL = `https://api.themoviedb.org/3/person/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}&language=en-US`;

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
            .then(people => {
                dispatch(setTotalPages(people.total_pages))
                dispatch(setPeople(people.results))
            })
            .then(retardPageLoading())
            .catch(error => {
                dispatch(setState("error"))
                console.error("Unfortunately, something went wrong...", error)
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
};
