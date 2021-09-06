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

    const posterSize1 = posterSizes[1];
    const posterSize2 = posterSizes[2];
    const posterSize3 = posterSizes[3];
    const posterSize4 = posterSizes[4];
    const posterSize5 = posterSizes[5];

    const tileWidth1 = "228px";
    const tileWidth2 = "286px";
    const tileWidth3 = "324px";

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
                                size1={posterSize1}
                                size2={posterSize2}
                                size3={posterSize3}
                                size4={posterSize4}
                                size5={posterSize5}
                                imageBaseUrl={imgURL}
                                imagePath={movieList[index].poster_path}
                                width1="100%"
                                width2={tileWidth1}
                                width3={tileWidth2}
                                width4={tileWidth2}
                                width5={tileWidth3}
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