import { useSelector, useDispatch } from "react-redux";
import Tile from "../../../common/Tile"
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesList } from "./styled";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieGenres } from "../useGetMovieGenres";
import { useGetPopularMovies } from "../useGetPopularMovies";
import { useGetMoviesDetails } from "../useDispatchMovieDetails";
import { selectMovieList, selectMovies, selectMoviesDetails, selectMoviesState } from "../moviesSlice";
import { selectImagesBaseURL, selectPosterSizes, selectPosterSize, setPosterSize } from "../../../configSlice";
import { useSetStatus } from "../../../useSetStatus";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const moviesState = useSelector(selectMoviesState);
    // eslint-disable-next-line
    const movies = useSelector(selectMovies);
    const movieList = useSelector(selectMovieList);
    const posterSize = useSelector(selectPosterSize);
    const moviesDetails = useSelector(selectMoviesDetails);

    useGetConfig();
    useGetMovieGenres();
    useGetPopularMovies();
    useGetMoviesDetails(movieList);
    useSetStatus();

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
        <MoviesList title="Movies" >
            {moviesState === "loading" ? (
                <LoadingPage />
            ) : (
                moviesState === "Error" ? (
                    <ErrorPage />
                ) : (
                    movieList.map((movie, index) => (
                        <Tile
                            key={movieList[index].id}
                            posterUrl={`${imgURL}${posterSize}${movieList[index].poster_path}`}
                            title={movieList[index].title}
                            subtitle={new Date(Date.parse(movieList[index].release_date)).getFullYear()}
                            countries={moviesDetails[index].production_countries}
                            releaseDate={movieList[index].release_date}
                            genreIds={movieList[index].genre_ids}
                            rating={movieList[index].vote_average}
                            votes={movieList[index].vote_count}
                            overview={movieList[index].overview}
                        />
                    ))))}
        </MoviesList>
    )
};

export default MoviesPage;