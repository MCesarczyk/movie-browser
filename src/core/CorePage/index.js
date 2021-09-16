import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ErrorPage from "./ErrorPage";
import noResults from "../../common/NoResultsLogo/noResults.svg";
import LoadingCircle from "./LoadingCircle";
import { Wrapper } from "../../common/Wrapper";
import { NoResultsLogo } from "./NoResultsLogo";
import { selectMoviesList } from "../../features/movies/moviesSlice";
import { selectState } from "../../globalSlice";
import searchQueryParamName from "../../features/Navigation/Search/searchQueryParamName";
import { Header } from "../../common/Header";

const CorePage = ({ message, body }) => {
    const location = useLocation();
    const movieList = useSelector(selectMoviesList);
    const moviesState = useSelector(selectState);
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    return (
        <Wrapper>
            {moviesState === "loading" &&
                <>
                    <Header>
                        {query ? `Search results for "${query}"` : message}
                    </Header>
                    {<LoadingCircle />}
                </>
            }
            {moviesState === "error" &&
                (query ?
                    <>
                        <Header>
                            {"Sorry, the page not found..."}
                        </Header>
                        {<NoResultsLogo src={noResults} alt="" />}
                    </>
                    :
                    <ErrorPage />
                )
            }
            {moviesState === "success" && movieList &&
                <>
                    {body}
                </>
            }
        </Wrapper>
    )
};

export default CorePage;