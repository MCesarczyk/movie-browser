import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMoviesState } from "./features/movies/moviesSlice";

export const useSetStatus = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setMoviesState("success"))
        }, 2_000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};