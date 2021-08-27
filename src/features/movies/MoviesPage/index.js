import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { applicationStart } from "../moviesSlice";

const MoviesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(applicationStart());
    }, []);

    return (
        <div>test</div>
    )
};

export default MoviesPage;