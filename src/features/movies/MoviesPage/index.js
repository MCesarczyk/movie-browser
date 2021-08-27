import { useSelector, useDispatch } from "react-redux";
import Tile from "../../../common/Tile"
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesList } from "./styled";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieGenres } from "./useGetMovieGenres";
import { useGetPopularMovies } from "./useGetPopularMovies";
import { selectMovies, selectMoviesState } from "../moviesSlice";
import { selectImagesBaseURL, selectPosterSizes, selectPosterSize, setPosterSize } from "../../../configSlice";

const MoviesPage = () => {
    

    return (
        <MoviesList title="Movies" >
            {moviesState === "loading" ? (
                <LoadingPage />
            ) : (
                moviesState === "Error" ? (
                    <ErrorPage />
                ) : (
                    movies.movies.map((movie, index) => (
                        <Tile
                            // key={movies.movies[index].id}
                            // title={movies.movies[index].title}
                            // subtitle={new Date(Date.parse(movies.movies[index].release_date)).getFullYear()}
                            // releaseDate={movies.movies[index].release_date}
                            // genreIds={movies.movies[index].genre_ids}
                            // rating={movies.movies[index].vote_average}
                            // votes={movies.movies[index].vote_count}
                            // overview={movies.movies[index].overview}
                            // posterUrl={`${imgURL}${posterSize}${movies.movies[index].poster_path}`}
                        />
                    ))))}
        </MoviesList>
    )
};

export default MoviesPage;