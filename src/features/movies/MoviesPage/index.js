import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Wrapper from "../../../common/Wrapper";
import TilesSection from "../../../common/TilesSection";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import searchQueryParamName from "../../Navigation/Search/searchQueryParamName";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectState,
    setPage,
    setQuery,
} from "../../../globalSlice";
import {
    selectMoviesList,
    fetchMovieGenres,
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
        dispatch(fetchMovieGenres());
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
                    <LoadingPage
                        message="Loading movies list..."
                    />
                }
                {moviesState === "error" &&
                    <ErrorPage />
                }
                {moviesState === "success" && movieList &&
                    <TilesSection
                        title="Popular movies"
                        body={movieList.map((movie, index) => (
                            <Tile
                                key={movieList[index].id}
                                movieId={movieList[index].id}
                                sizes={posterSizesArray}
                                widths={tileWidths}
                                imageBaseUrl={imgURL}
                                imagePath={movieList[index].poster_path}
                                imageWidth="100%"
                                titleUrl={`/movie/${movieList[index].id}`}
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