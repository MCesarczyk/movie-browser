import React, { Suspense } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
// import { useGetConfig } from "../../../useGetConfig";
// import { useGetMovieDetails } from "../useGetMovieDetails";
// import { useGetMovieCredits } from "../useGetMovieCredits";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
    fetchMovieDetails,
    fetchMovieCredits,
} from "../moviesSlice";
import {
    selectBackdropSizes,
    selectImagesBaseURL,
    selectPosterSizes,
    selectProfileSizes,
    setId,
} from "../../../globalSlice";
const Section = React.lazy(() => import('../../../common/SlidesSection'));

const MoviePage = () => {
    const dispatch = useDispatch();
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

    // useGetConfig();
    // useGetMovieDetails(movieId);
    // useGetMovieCredits(movieId);

    useEffect(() => {
        dispatch(setId(id));
        dispatch(fetchMovieDetails());
        dispatch(fetchMovieCredits());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backdropSizesArray = [
        backdropSizes[1],
        backdropSizes[1],
        backdropSizes[2],
        backdropSizes[2],
        backdropSizes[3]
    ];

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[2],
        posterSizes[3],
        posterSizes[4],
        posterSizes[5]
    ];

    const profileSizesArray = [
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1]
    ];

    const slideWidths = ["144px", "160px", "184px", "208px", "208px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];

    return (
        <>
            {movieDetails.backdrop_path !== null && <Backdrop
                imageBaseUrl={imgURL}
                imagePath={movieDetails.backdrop_path}
                sizes={backdropSizesArray}
                title={movieDetails.original_title}
                rating={movieDetails.vote_average}
                votes={movieDetails.vote_count}
            />
            }
            <Wrapper>
                <Tile
                    oversize
                    imageWidth="312px"
                    mobile="177px"
                    widths={tileWidths}
                    key={movieId}
                    movieId={movieId}
                    sizes={posterSizesArray}
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
                                widths={slideWidths}
                                key={movieCast[index].credit_id}
                                sizes={profileSizesArray}
                                imageBaseUrl={imgURL}
                                imagePath={movieCast[index].profile_path}
                                titleUrl={`/person/${movieCast[index].id}`}
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
                                widths={slideWidths}
                                key={movieCrew[index].credit_id}
                                sizes={profileSizesArray}
                                titleUrl={`/person/${movieCrew[index].id}`}
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