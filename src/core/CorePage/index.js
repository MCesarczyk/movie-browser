import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import ErrorPage from "./ErrorPage";
import { selectMoviesResults, selectMoviesState } from "../../features/movies/moviesSlice";
import searchQueryParamName from "../../features/search/searchQueryParamName";

const CorePage = ({ message, body }) => {
    const location = useLocation();
    const movieList = useSelector(selectMoviesResults);
    const moviesState = useSelector(selectMoviesState);
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    return (
        <>
            {moviesState === "idle" && <></>}
            {moviesState === "loading" &&
                <LoadingPage
                    message={message}
                    query={query}
                />
            }
            {moviesState === "error" &&
                (query ? <NoResultsPage /> : <ErrorPage />)
            }
            {moviesState === "success" && movieList && body}
        </>
    )
};

export default CorePage;