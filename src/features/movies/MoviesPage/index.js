import { useEffect } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { useGetConfig } from "../../../useGetConfig";
import { useGetPopularMovies } from "../useGetPopularMovies";
import { useGetMovieGenres } from "../useGetMovieGenres";
import {
    selectMovieList,
} from "../moviesSlice";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectState,
} from "../../../globalSlice";
import TilesSection from "../../../common/TilesSection";

const MoviesPage = () => {
    const movieList = useSelector(selectMovieList);
    const moviesState = useSelector(selectState);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);

    useGetConfig();
    useGetMovieGenres();
    useGetPopularMovies();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[3],
        posterSizes[3],
        posterSizes[3],
        posterSizes[4],
    ]

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
                {moviesState === "success" && <Pager />}
            </Wrapper>
        </>
    )
};

export default MoviesPage;