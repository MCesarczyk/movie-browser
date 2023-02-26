import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingCircle from "common/LoadingCircle";
import { Wrapper } from "common/Wrapper";
import Tile from "core/Tile"
import { Backdrop } from "./Backdrop";
import { useMovieApiService } from "./movieApiService";
import { ContentWrapper } from "core/CorePage/ContentWrapper";
import { ImagesConfiguration } from "types";
const Section = React.lazy(() => import('common/Section'));


interface MoviePageProps {
    images: ImagesConfiguration | null;
};

export const MoviePage = ({ images }: MoviePageProps) => {
    const { id }: any = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    const backdropSizesArray = images ? [
        images?.backdropSizes[1],
        images?.backdropSizes[1],
        images?.backdropSizes[2],
        images?.backdropSizes[2],
        images?.backdropSizes[3]
    ] : undefined;

    const posterSizesArray = [
        images?.posterSizes[1],
        images?.posterSizes[2],
        images?.posterSizes[3],
        images?.posterSizes[4],
        images?.posterSizes[5]
    ];

    const profileSizesArray = [
        images?.profileSizes[1],
        images?.profileSizes[1],
        images?.profileSizes[1],
        images?.profileSizes[1],
        images?.profileSizes[1]
    ];

    const personTileWidths = ["136px", "160px", "184px", "208px", "208px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];

    const { status, error, movieDetails, cast: movieCast, crew: movieCrew } = useMovieApiService();

    return (
        <ContentWrapper
            status={status}
            error={error}
            loadingMessage="Loading movie details..."
            isDataPresent={!!movieDetails}
        >
            <>
                {movieDetails && images && backdropSizesArray && movieDetails.backdrop_path !== null && (
                    <Backdrop
                        imageBaseUrl={images.baseURL}
                        imagePath={movieDetails.backdrop_path}
                        sizes={backdropSizesArray}
                        title={movieDetails.original_title}
                        rating={movieDetails.vote_average}
                        votes={movieDetails.vote_count}
                    />
                )}
                {movieDetails && (
                    < Wrapper >
                        {/* @ts-ignore */}
                        <Tile
                            oversize="true"
                            imageWidth="312px"
                            mobile="177px"
                            widths={tileWidths}
                            key={id as string}
                            sizes={posterSizesArray}
                            imageBaseUrl={images?.baseURL}
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
                            genresList={movieDetails.genres}
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
                                            imageBaseUrl={images?.baseURL}
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
                                            imageBaseUrl={images?.baseURL}
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
                )}
            </>
        </ContentWrapper >
    );
};
