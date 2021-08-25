import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "./features/movies/moviesSlice";

export const useSetStatus = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setStatus("success"))
        }, 2_000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};