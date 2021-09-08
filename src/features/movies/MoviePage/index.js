import React, { Suspense } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useGetMovieCredits } from "../useGetMovieCredits";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
} from "../moviesSlice";
import {
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    setPosterSize
} from "../../../globalSlice";
import noPicture from "../../../common/Tile/noPicture.svg";
const Section = React.lazy(() => import('../../../common/Section'));

const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSize = useSelector(selectPosterSize);
    const posterSizes = useSelector(selectPosterSizes);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const genresList = useSelector(selectGenresList);

    useGetConfig();
    useGetMovieDetails(movieId);
    useGetMovieCredits(movieId);

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
            <Backdrop
                backdropUrl={`${imgURL}original${movieDetails.backdrop_path}`}
                title={movieDetails.original_title}
                rating={movieDetails.vote_average}
                votes={movieDetails.vote_count}
            />
            <Wrapper>
                <Tile
                    oversize
                    key={movieId}
                    movieId={movieId}
                    imageWidth="312px"
                    titleUrl={`/movie/${movieId}`}
                    imageUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
                    title={movieDetails.title}
                    subtitle={movieDetails && new Date(Date.parse(movieDetails.release_date)).getFullYear().toString()}
                    countries={movieDetails.production_countries}
                    releaseDate={movieDetails.release_date}
                    genresList={genresList}
                    rating={movieDetails.vote_average}
                    votes={movieDetails.vote_count}
                    overview={movieDetails.overview}
                />
                <Suspense fallback={<LoadingCircle />}>
                    {movieCast && <Section
                        title="Cast"
                        body={movieCast && movieCast.map((person, index) => (
                            <Tile
                                minimal
                                key={movieCast[index].credit_id}
                                titleUrl={`/person/${movieCast[index].id}`}
                                imageUrl={!!movieCast[index].profile_path ? `${imgURL}${posterSize}${movieCast[index].profile_path}` : noPicture}
                                title={movieCast[index].name}
                                subtitle={movieCast[index].character}
                            />
                        ))}
                    />}
                    {movieCrew && <Section
                        title="Crew"
                        body={movieCrew && movieCrew.map((person, index) => (
                            <Tile
                                minimal
                                key={movieCrew[index].credit_id}
                                titleUrl={`/person/${movieCrew[index].id}`}
                                imageUrl={!!movieCrew[index].profile_path ? `${imgURL}${posterSize}${movieCrew[index].profile_path}` : noPicture}
                                title={movieCrew[index].name}
                                subtitle={movieCrew[index].job}
                            />
                        ))}
                    />}
                </Suspense>
            </Wrapper>
        </>
    );
};

export default MoviePage;