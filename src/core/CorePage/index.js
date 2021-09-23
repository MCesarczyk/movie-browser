import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import ErrorPage from "./ErrorPage";
import { selectMoviesList } from "../../features/movies/moviesSlice";
import { selectState } from "../../globalSlice";
import searchQueryParamName from "../../features/search/searchQueryParamName";

const CorePage = ({ message, body }) => {
    const location = useLocation();
    const itemsList = useSelector(selectMoviesList);
    const appState = useSelector(selectState);
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    return (
        <>
            {appState === "idle" && <></>}
            {appState === "loading" &&
                <LoadingPage
                    message={message}
                    query={query}
                />
            }
            {appState === "error" &&
                (query ? <NoResultsPage /> : <ErrorPage />)
            }
            {appState === "success" && itemsList && body}
        </>
    )
};

export default CorePage;