import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { TileList } from "../../../common/TileList";
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
    selectState
} from "../../../globalSlice";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const movieList = useSelector(selectMovieList);
    const moviesState = useSelector(selectState);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);

    useGetConfig();
    useGetMovieGenres();
    useGetPopularMovies();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onPageResize = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[3]));
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[2]));
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[1]));
        } else {
            dispatch(setPosterSize(posterSizes[0]));
        };
    };

    window.addEventListener("resize", onPageResize);

    return (
        <>
            <Wrapper>
                <TileList>
                    {moviesState === "loading" && <LoadingPage message="Loading movies list..." />}
                    {moviesState === "error" && <ErrorPage />}
                    {moviesState === "success" && movieList && movieList.map((movie, index) => (
                        <Tile
                            width="292"
                            mobile="114"
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
                </TileList>
                <Pager />
            </Wrapper>
        </>
    )
};

export default MoviesPage;