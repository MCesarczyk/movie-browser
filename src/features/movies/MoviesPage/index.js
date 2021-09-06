import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "../moviesSlice";

const MoviesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>test</div>
    )
};

export default MoviesPage;