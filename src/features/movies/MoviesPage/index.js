import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    selectPosterSize,
    setPosterSize,
    selectState,
    selectTileWidth,
    setTileWidth
} from "../../../globalSlice";
import TilesSection from "../../../common/TilesSection";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const movieList = useSelector(selectMovieList);
    const moviesState = useSelector(selectState);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);
    const tileWidth = useSelector(selectTileWidth);

    useGetConfig();
    useGetMovieGenres();
    useGetPopularMovies();

    // eslint-disable-next-line
    const adjustPhotoSizes = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[3]));
            dispatch(setTileWidth("324px"));
        } else if (maxwidth > "620") {
            dispatch(setPosterSize(posterSizes[3]));
            dispatch(setTileWidth("286px"));
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[3]));
            dispatch(setTileWidth("228px"));
        } else {
            dispatch(setPosterSize(posterSizes[1]));
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        adjustPhotoSizes();
    }, [adjustPhotoSizes]);

    window.addEventListener("resize", adjustPhotoSizes);

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
                                width={tileWidth}
                                imageWidth="100%"
                                movieId={movieList[index].id}
                                key={movieList[index].id}
                                titleUrl={`/movie/${movieList[index].id}`}
                                imageUrl={`${imgURL}${posterSize}${movieList[index].poster_path}`}
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