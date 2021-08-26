import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setState } from "./features/movies/moviesSlice";

export const useSetState = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setState("success"))
        }, 2_000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};