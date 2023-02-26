import { useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";

import searchQueryParamName from "features/search/searchQueryParamName";
import { selectMovieState } from "features/movie/movieSlice";
import { selectPersonState } from "features/person/personSlice";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";


interface CorePageProps {
    message: string;
    body: JSX.Element;
};

const CorePage = ({ message, body }: CorePageProps) => {
    const movieState = useSelector(selectMovieState);
    const personState = useSelector(selectPersonState);

    const movieMatch = useRouteMatch("/movie");
    const personMatch = useRouteMatch("/person");

    const matchAppState = () => {
        if (movieMatch) {
            return movieState;
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
            {appState === "noResults" && query && <NoResultsPage query={query} />}
            {appState === "error" && <ErrorPage />}
            {appState === "success" && body}
        </>
    )
};

export default CorePage;
