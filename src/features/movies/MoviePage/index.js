import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
} from "../moviesSlice";
import {
    selectBackdropSizes,
    selectImagesBaseURL,
    selectPosterSizes,
    selectProfileSizes,
} from "../../../globalSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useGetMovieCredits } from "../useGetMovieCredits";
import { useEffect } from "react";
const Section = React.lazy(() => import('../../../common/SlidesSection'));

const MoviePage = () => {
    const { id } = useParams();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const backdropSizes = useSelector(selectBackdropSizes);
    const profileSizes = useSelector(selectProfileSizes);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const genresList = useSelector(selectGenresList);

    useGetConfig();
    useGetMovieDetails(movieId);
    useGetMovieCredits(movieId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backdropSize1 = backdropSizes[0];
    const backdropSize2 = backdropSizes[1];
    const backdropSize3 = backdropSizes[2];
    const backdropSize4 = backdropSizes[3];

    const posterSize1 = posterSizes[1];
    const posterSize2 = posterSizes[2];
    const posterSize3 = posterSizes[3];
    const posterSize4 = posterSizes[4];
    const posterSize5 = posterSizes[5];

    const profileSize1 = profileSizes[1];
    const profileSize2 = profileSizes[2];
    const profileSize3 = profileSizes[3];

    const slideWidth1 = "144px";
    const slideWidth2 = "160px";
    const slideWidth3 = "184px";
    const slideWidth4 = "208px";

    return (
        <>
            <Backdrop
                imageBaseUrl={imgURL}
                imagePath={movieDetails.backdrop_path}
                size1={backdropSize1}
                size2={backdropSize2}
                size3={backdropSize3}
                size4={backdropSize4}
                size5={backdropSize4}
                title={movieDetails.original_title}
                rating={movieDetails.vote_average}
                votes={movieDetails.vote_count}
            />
            <Wrapper>
                <Tile
                    oversize
                    imageWidth="312px"
                    mobile="177px"
                    key={movieId}
                    movieId={movieId}
                    size1={posterSize1}
                    size2={posterSize2}
                    size3={posterSize3}
                    size4={posterSize4}
                    size5={posterSize5}
                    imageBaseUrl={imgURL}
                    imagePath={movieDetails.poster_path}
                    titleUrl={`/movie/${movieId}`}
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
                                slide
                                width1={slideWidth1}
                                width2={slideWidth2}
                                width3={slideWidth3}
                                width4={slideWidth4}
                                width5={slideWidth4}
                                key={movieCast[index].credit_id}
                                size1={profileSize1}
                                size2={profileSize1}
                                size3={profileSize2}
                                size4={profileSize2}
                                size5={profileSize3}
                                imageBaseUrl={imgURL}
                                imagePath={movieCast[index].profile_path}
                                titleUrl={`/people/${movieCast[index].id}`}
                                title={movieCast[index].name}
                                subtitle={movieCast[index].character}
                            />
                        ))}
                    />}
                    {movieCrew && <Section
                        title="Crew"
                        body={movieCrew && movieCrew.map((person, index) => (
                            <Tile
                                slide
                                width1={slideWidth1}
                                width2={slideWidth2}
                                width3={slideWidth3}
                                width4={slideWidth4}
                                width5={slideWidth4}
                                key={movieCrew[index].credit_id}
                                size1={profileSize1}
                                size2={profileSize1}
                                size3={profileSize2}
                                size4={profileSize2}
                                size5={profileSize3}
                                titleUrl={`/people/${movieCrew[index].id}`}
                                imageBaseUrl={imgURL}
                                imagePath={movieCrew[index].profile_path}
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