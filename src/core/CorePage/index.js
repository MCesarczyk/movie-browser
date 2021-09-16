import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ErrorPage from "../../common/ErrorPage";
import InfoPage from "../../common/InfoPage";
import noResults from "../../common/InfoPage/NoResultsLogo/noResults.svg";
import Pager from "../../common/Pager";
import LoadingCircle from "../../common/InfoPage/LoadingCircle";
import { Wrapper } from "../../common/Wrapper";
import { NoResultsLogo } from "../../common/InfoPage/NoResultsLogo";
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
                <InfoPage
                    title={query ? `Search results for "${query}"` : message}
                    body={<LoadingCircle />}
                />
            }
            {moviesState === "error" &&
                (query ?
                    <InfoPage
                        title={"Sorry, the page not found..."}
                        body={<NoResultsLogo src={noResults} alt="" />}
                    />
                    :
                    <ErrorPage />
                )
            }
            {moviesState === "success" && movieList && body}
            {moviesState === "success" &&
                <Pager property={"/movies"} />
            }
        </Wrapper>
    )
};

export default CorePage;