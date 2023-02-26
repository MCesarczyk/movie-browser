import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import LoadingCircle from "common/LoadingCircle";
import { Wrapper } from "common/Wrapper";
import CorePage from "core/CorePage";
import Tile from "core/Tile"
import { Backdrop } from "./Backdrop";
import {
    selectImagesBaseURL,
    selectBackdropSizes,
    selectPosterSizes,
    selectProfileSizes,
} from "commonSlice";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
    clearMovieData,
    setMovieId,
} from "../movieSlice";
import { MovieDetails } from "types";
const Section = React.lazy(() => import('common/Section'));


export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id }: any = useParams();
    // @ts-ignore
    const movieDetails: MovieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const backdropSizes = useSelector(selectBackdropSizes);
    const profileSizes = useSelector(selectProfileSizes);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const genresList = useSelector(selectGenresList);

    useEffect(() => {
        dispatch(setMovieId(id as string));
    }, [dispatch, id]);

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            dispatch(clearMovieData());
        };
        // eslint-disable-next-line
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

    const personTileWidths = ["136px", "160px", "184px", "208px", "208px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];

    return (
        <CorePage
            message="Loading movie details..."
            body={
                <>
                    {movieDetails && movieDetails.backdrop_path !== null &&
                        <Backdrop
                            imageBaseUrl={imgURL}
                            imagePath={movieDetails.backdrop_path}
                            sizes={backdropSizesArray}
                            title={movieDetails.original_title}
                            rating={movieDetails.vote_average}
                            votes={movieDetails.vote_count}
                        />
                    }
                    < Wrapper >
                        {/* @ts-ignore */}
                        <Tile
                            oversize="true"
                            imageWidth="312px"
                            mobile="177px"
                            widths={tileWidths}
                            key={id as string}
                            sizes={posterSizesArray}
                            imageBaseUrl={imgURL}
                            imagePath={movieDetails.poster_path}
                            detailsUrl={`/movie/${id as string}`}
                            title={movieDetails.title}
                            subtitle={
                                movieDetails &&
                                movieDetails.release_date &&
                                new Date(Date.parse(movieDetails.release_date)).getFullYear().toString()
                            }
                            countries={movieDetails.production_countries}
                            releaseDate={movieDetails.release_date}
                            genresList={genresList}
                            rating={movieDetails.vote_average}
                            votes={movieDetails.vote_count}
                            overview={movieDetails.overview}
                        />
                        <Suspense fallback={<LoadingCircle />}>
                            {movieCast && movieCast.length > 0 &&
                                <Section
                                    title="Cast"
                                    itemsList={movieCast && movieCast.map((person, index) => (
                                        // @ts-ignore
                                        <Tile
                                            person="true"
                                            widths={personTileWidths}
                                            key={movieCast[index].credit_id}
                                            sizes={profileSizesArray}
                                            imageBaseUrl={imgURL}
                                            imagePath={movieCast[index].profile_path}
                                            detailsUrl={`/person/${movieCast[index].id}`}
                                            title={movieCast[index].name}
                                            subtitle={movieCast[index].character}
                                        />
                                    ))
                                    }
                                />
                            }
                            {movieCrew && movieCrew.length > 0 &&
                                <Section
                                    title="Crew"
                                    itemsList={movieCrew && movieCrew.map((person, index) => (
                                        // @ts-ignore
                                        <Tile
                                            person="true"
                                            widths={personTileWidths}
                                            key={movieCrew[index].credit_id}
                                            sizes={profileSizesArray}
                                            detailsUrl={`/person/${movieCrew[index].id}`}
                                            imageBaseUrl={imgURL}
                                            imagePath={movieCrew[index].profile_path}
                                            title={movieCrew[index].name}
                                            subtitle={movieCrew[index].job}
                                        />
                                    ))
                                    }
                                />
                            }
                        </Suspense>
                    </Wrapper >
                </>
            }
        />
    );
};
