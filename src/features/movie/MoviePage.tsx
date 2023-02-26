import React, { Suspense, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingCircle from "common/LoadingCircle";
import { Wrapper } from "common/Wrapper";
import Tile from "core/Tile"
import { CorePage } from "core/CorePage";
import { Backdrop } from "./Backdrop";
import { useMovieApiService } from "./movieApiService";
import { ImagesConfigContext } from "services/ImagesConfigContext";
const Section = React.lazy(() => import('common/Section'));


export const MoviePage = () => {
    const { id }: any = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    const { baseUrl, posterSizes, profileSizes, backdropSizes } = useContext(ImagesConfigContext);

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

    const { status, error, isFetching, movieDetails, cast: movieCast, crew: movieCrew } = useMovieApiService();

    return (
        <CorePage
            status={status}
            error={error}
            loadingMessage="Loading movie details..."
            isDataPresent={!!movieDetails}
            isFetching={isFetching}
        >
            <>
                {movieDetails && backdropSizesArray && movieDetails.backdrop_path !== null && (
                    <Backdrop
                        imageBaseUrl={baseUrl}
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
                            imageBaseUrl={baseUrl}
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
                                    itemsList={movieCast && movieCast.map(person => (
                                        // @ts-ignore
                                        <Tile
                                            person="true"
                                            widths={personTileWidths}
                                            key={person.credit_id}
                                            sizes={profileSizesArray}
                                            imageBaseUrl={baseUrl}
                                            imagePath={person.profile_path}
                                            detailsUrl={`/person/${person.id}`}
                                            title={person.name}
                                            subtitle={person.character}
                                        />
                                    ))
                                    }
                                />
                            }
                            {movieCrew && movieCrew.length > 0 &&
                                <Section
                                    title="Crew"
                                    itemsList={movieCrew && movieCrew.map(person => (
                                        // @ts-ignore
                                        <Tile
                                            person="true"
                                            widths={personTileWidths}
                                            key={person.credit_id}
                                            sizes={profileSizesArray}
                                            detailsUrl={`/person/${person.id}`}
                                            imageBaseUrl={baseUrl}
                                            imagePath={person.profile_path}
                                            title={person.name}
                                            subtitle={person.job}
                                        />
                                    ))
                                    }
                                />
                            }
                        </Suspense>
                    </Wrapper >
                )}
            </>
        </CorePage >
    );
};
