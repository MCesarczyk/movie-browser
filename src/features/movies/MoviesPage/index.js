import { useSelector } from "react-redux";
import { useGetPopularMovies } from "./useGetPopularMovies";
import { selectMovies, selectMoviesState } from "../moviesSlice";
import Tile from "../../../common/Tile"
import { MoviesList } from "./styled";

const MoviesPage = () => {
    useGetPopularMovies();
    const moviesState = useSelector(selectMoviesState);
    const movies = useSelector(selectMovies);

    return (
        <MoviesList title="Movies">
            {movies.movies.map((movie, index) => (
                <Tile
                    key={movies.movies[index].id}
                    title={movies.movies[index].title}
                    posterUrl={`https://image.tmdb.org/t/p/w500${movies.movies[index].poster_path}`}
                />
            ))}
        </MoviesList>
    )
};

export default MoviesPage;