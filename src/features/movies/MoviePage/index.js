import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
} from "../moviesSlice";
import {
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    setPosterSize
} from "../../../configSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useGetMovieCredits } from "../useGetMovieCredits";
import Wrapper from "../../../common/Wrapper";
import Backdrop from "./Backdrop";
import Tile from "../../../common/Tile"
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
const Section = React.lazy(() => import('../../../common/Section'));

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);

    useGetConfig();
    useGetMovieDetails(movieId);
    useGetMovieCredits(movieId);

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
                    key={movieId}
                    oversize
                    imageWidth="312px"
                    imageUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
                    title={movieDetails.title}
                    subtitle={movieDetails && new Date(Date.parse(movieDetails.release_date)).getFullYear().toString()}
                    countries={movieDetails.production_countries}
                    releaseDate={movieDetails.release_date}
                    genreIds={movieDetails.genre_ids}
                    rating={movieDetails.vote_average}
                    votes={movieDetails.vote_count}
                    overview={movieDetails.overview}
                />
                <Suspense fallback={<LoadingCircle />}>
                    {movieCast && <Section
                        title="Cast"
                        body={movieCast && movieCast.map((person, index) => (
                            <Tile
                                imageWidth="177px"
                                key={movieCast[index].credit_id}
                                imageUrl={`${imgURL}${posterSize}${movieCast[index].profile_path}`}
                                title={movieCast[index].name}
                                subtitle={movieCast[index].character}
                            />
                        ))}
                    />}
                    {movieCrew && <Section
                        title="Crew"
                        body={movieCrew && movieCrew.map((person, index) => (
                            <Tile
                                key={movieCrew[index].credit_id}
                                imageUrl={`${imgURL}${posterSize}${movieCrew[index].profile_path}`}
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