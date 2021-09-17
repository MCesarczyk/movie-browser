import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import LoadingPage from "./LoadingPage";
import NoResultsPage from "./NoResultsPage";
import ErrorPage from "./ErrorPage";
import { Wrapper } from "../../common/Wrapper";
import { selectMoviesList } from "../../features/movies/moviesSlice";
import { selectState } from "../../globalSlice";
import searchQueryParamName from "../../features/Navigation/Search/searchQueryParamName";

const CorePage = ({ message, body }) => {
    const location = useLocation();
    const movieList = useSelector(selectMoviesList);
    const moviesState = useSelector(selectState);
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    return (
        <Wrapper>
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
        </Wrapper>
    )
};

export default CorePage;