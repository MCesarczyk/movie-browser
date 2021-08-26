import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesList } from "./styled";
import { useGetConfig } from "../../../useGetConfig";
import { useGetPopularMovies } from "../useGetPopularMovies";
import { useGetMovieGenres } from "../useGetMovieGenres";
import { useGetMoviesDetails } from "../useDispatchMovieDetails";
import { useSetState } from "../../../useSetState";
import {
    selectMovieList,
    selectMoviesDetails,
    selectMoviesState
} from "../moviesSlice";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectPosterSize,
    setPosterSize
} from "../../../configSlice";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const movieList = useSelector(selectMovieList);
    const moviesState = useSelector(selectMoviesState);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);
    const moviesDetails = useSelector(selectMoviesDetails);

    useGetConfig();
    useGetMovieGenres();
    useGetPopularMovies();
    useGetMoviesDetails(movieList);
    useSetState();

    const onPageResize = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]))
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
        } else {
            dispatch(setPosterSize(posterSizes[1]))
        };
    };

    window.addEventListener("resize", onPageResize);

    return (
        <>
            <Wrapper>
                <MoviesList title="Movies" >
                    {moviesState === "loading" ? (
                        <LoadingPage />
                    ) : (
                        moviesState === "Error" ? (
                            <ErrorPage />
                        ) : (
                            movieList.map((movie, index) => (
                                <Tile
                                    movieId={movieList && movieList[index].id}
                                    key={movieList && movieList[index].id}
                                    posterUrl={movieList && `${imgURL}${posterSize}${movieList[index].poster_path}`}
                                    title={movieList && movieList[index].title}
                                    subtitle={movieList && new Date(Date.parse(movieList[index].release_date)).getFullYear()}
                                    countries={movieList && moviesDetails[index].production_countries}
                                    releaseDate={movieList && movieList[index].release_date}
                                    genreIds={movieList && movieList[index].genre_ids}
                                    rating={movieList && movieList[index].vote_average}
                                    votes={movieList && movieList[index].vote_count}
                                    overview={movieList && movieList[index].overview}
                                />
                            ))))}
                </MoviesList>
                <Pager />
            </Wrapper>
        </>
    )
};

export default MoviesPage;