import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Wrapper } from "../../../common/Wrapper";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import InfoPage from "../../../common/InfoPage";
import ErrorPage from "../../../common/ErrorPage";
import LoadingCircle from "../../../common/InfoPage/LoadingCircle";
import { NoResultsLogo } from "../../../common/InfoPage/NoResultsLogo";
import noResults from "../../../common/InfoPage/NoResultsLogo/noResults.svg";
import searchQueryParamName from "../../Navigation/Search/searchQueryParamName";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectState,
    selectTotalResults,
    setPage,
    setQuery,
} from "../../../globalSlice";
import {
    selectMoviesList,
    fetchMoviesList
} from "../moviesSlice";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const { page } = useParams();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(setQuery(query));
        dispatch(fetchMoviesList());
        // eslint-disable-next-line
    }, [query]);

    useEffect(() => {
        dispatch(setPage(page));
        dispatch(fetchMoviesList());
        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    const movieList = useSelector(selectMoviesList);
    const moviesState = useSelector(selectState);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const totalResults = useSelector(selectTotalResults);

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[3],
        posterSizes[3],
        posterSizes[3],
        posterSizes[4]
    ];

    const tileWidths = ["100%", "228px", "286px", "286px", "324px"];

    return (
        <>
            <Wrapper>
                {moviesState === "loading" &&
                    <InfoPage
                        title={query ? `Search results for "${query}"` : "Loading movies list..."}
                        extraContent={<LoadingCircle />}
                    />
                }
                {moviesState === "error" &&
                    (query ?
                        <InfoPage
                            title={"Sorry, the page not found..."}
                            extraContent={<NoResultsLogo src={noResults} alt="" />}
                        />
                        :
                        <ErrorPage />
                    )
                }
                {moviesState === "success" && movieList &&
                    <Section
                        title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                        body={movieList.map((movie, index) => (
                            <Tile
                                key={movieList[index].id}
                                sizes={posterSizesArray}
                                widths={tileWidths}
                                imageBaseUrl={imgURL}
                                imagePath={movieList[index].poster_path}
                                imageWidth="100%"
                                detailsUrl={`/movie/${movieList[index].id}`}
                                title={movieList[index].title}
                                subtitle={new Date(Date.parse(movieList[index].release_date)).getFullYear()}
                                genreIds={movieList[index].genre_ids}
                                rating={movieList[index].vote_average}
                                votes={movieList[index].vote_count}
                            />
                        ))}
                    />
                }
                {moviesState === "success" && <Pager property={"/movies"} />}
            </Wrapper>
        </>
    )
};

export default MoviesPage;