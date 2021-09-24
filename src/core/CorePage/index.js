import { useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import ErrorPage from "./ErrorPage";
import searchQueryParamName from "../../features/search/searchQueryParamName";
import { selectMoviesResults, selectMoviesState } from "../../features/movies/moviesSlice";
import { selectPeopleResults, selectPeopleState } from "../../features/people/peopleSlice";

const CorePage = ({ message, body }) => {
    const moviesList = useSelector(selectMoviesResults);
    const moviesState = useSelector(selectMoviesState);
    const peopleList = useSelector(selectPeopleResults);
    const peopleState = useSelector(selectPeopleState);

    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const itemsList = moviesMatch ? moviesList : peopleList;

    const matchAppState = () => {
        if (moviesMatch) {
            return moviesState;
        } else if (peopleMatch) {
            return peopleState;
        };
    };

    const appState = matchAppState();

    const location = useLocation();
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