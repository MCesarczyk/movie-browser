import { useSelector } from "react-redux";
import { useGetPopularMovies } from "./useGetPopularMovies";
import { selectMovies, selectMoviesState } from "../moviesSlice";
import Tile from "../../../common/Tile"
import { MoviesList } from "./styled";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { useGetMovieGenres } from "./useGetMovieGenres";

const MoviesPage = () => {
    useGetPopularMovies();
    const moviesState = useSelector(selectMoviesState);
    const movies = useSelector(selectMovies);
    useGetMovieGenres();

    return (
        <MoviesList title="Movies">
            {moviesState === "loading" ? (
                <LoadingPage />
            ) : (
                moviesState === "Error" ? (
                    <ErrorPage />
                ) : (
                    movies.movies.map((movie, index) => (
                        <Tile
                            key={movies.movies[index].id}
                            title={movies.movies[index].title}
                            subtitle="2021"
                            releaseDate={movies.movies[index].release_date}
                            genreIds={movies.movies[index].genre_ids}
                            rating={movies.movies[index].vote_average}
                            votes={movies.movies[index].vote_count}
                            overview={movies.movies[index].overview}
                            posterUrl={`https://image.tmdb.org/t/p/w500${movies.movies[index].poster_path}`}
                        />
                    ))))}
        </MoviesList>
    )
};

export default MoviesPage;