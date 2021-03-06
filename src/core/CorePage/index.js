import { useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import ErrorPage from "./ErrorPage";
import searchQueryParamName from "../../features/search/searchQueryParamName";
import { selectMoviesResults, selectMoviesState } from "../../features/movies/moviesSlice";
import { selectPeopleResults, selectPeopleState } from "../../features/people/peopleSlice";
import { selectMovieState } from "../../features/movie/movieSlice";
import { selectPersonState } from "../../features/person/personSlice";

const CorePage = ({ message, body }) => {
    const moviesList = useSelector(selectMoviesResults);
    const moviesState = useSelector(selectMoviesState);
    const peopleList = useSelector(selectPeopleResults);
    const peopleState = useSelector(selectPeopleState);
    const movieState = useSelector(selectMovieState);
    const personState = useSelector(selectPersonState);

    const moviesMatch = useRouteMatch("/movies");
    const movieMatch = useRouteMatch("/movie");
    const peopleMatch = useRouteMatch("/people");
    const personMatch = useRouteMatch("/person");
    const itemsList = moviesMatch ? moviesList : peopleList;

    const matchAppState = () => {
        if (moviesMatch) {
            return moviesState;
        } else if (movieMatch) {
            return movieState;
        } else if (peopleMatch) {
            return peopleState;
        } else if (personMatch) {
            return personState;
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
            {appState === "noResults" && <NoResultsPage query={query} />}
            {appState === "error" && <ErrorPage />}
            {appState === "success" && itemsList && body}
        </>
    )
};

export default CorePage;