import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesList } from "./styled";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieGenres } from "../useGetMovieGenres";
import { useGetMovies } from "../useGetMovies";
import { selectMovieList } from "../moviesSlice";
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
    useGetMovies();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                {moviesState === "loading" && <LoadingPage message="Loading movies list..." />}
                {moviesState === "error" && <ErrorPage />}
                <MoviesList title="Movies" >
                    {moviesState === "success" && movieList && movieList.map((movie, index) => (
                        <Tile
                            movieId={movieList[index].id}
                            key={movieList[index].id}
                            titleUrl={`/movie/${movieList[index].id}`}
                            imageWidth="292px"
                            imageUrl={`${imgURL}${posterSize}${movieList[index].poster_path}`}
                            title={movieList[index].title}
                            subtitle={new Date(Date.parse(movieList[index].release_date)).getFullYear()}
                            genreIds={movieList[index].genre_ids}
                            rating={movieList[index].vote_average}
                            votes={movieList[index].vote_count}
                        />
                    ))}
                </MoviesList>
                {moviesState === "success" && <Pager />}
            </Wrapper>
        </>
    )
};

export default MoviesPage;