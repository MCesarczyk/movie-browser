import { useEffect } from "react";
import { useSelector } from "react-redux";

import Section from "common/Section";
import { selectImagesBaseURL, selectPosterSizes } from "commonSlice";
import { MovieResult } from "./interfaces";
import Tile from "core/Tile"
import { Pager } from "core/Pager";
import LoadingPage from "core/CorePage/LoadingPage";
import { ErrorPage } from "core/CorePage/ErrorPage/ErrorPage";
import { useMoviesApiService } from "./moviesApiService";
import NoResultsPage from "core/CorePage/NoResultsPage";


export const MoviesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[3],
        posterSizes[3],
        posterSizes[3],
        posterSizes[4]
    ];

    const tileWidths = ["100%", "228px", "286px", "286px", "324px"];

    const getFullYearFromDate = (movieList: MovieResult[], index: number) => {
        const releaseDate = movieList[index].release_date;
        return releaseDate && new Date(Date.parse(releaseDate)).getFullYear();
    };

    const { status, error, isPreviousData, isFetching, query, movieList, totalPages, totalResults } = useMoviesApiService();

    if (status === "loading") {
        return <LoadingPage
            message="Loading movies list..."
            query={query}
        />
    }

    if (query && !totalResults) {
        return <NoResultsPage query={query} />
    }

    if (status === "error") {
        return <ErrorPage error={error as Error} />
    }

    if (status === "success") {
        return (
            <>
                <Section
                    isFetching={!!isFetching}
                    isObsolete={isPreviousData}
                    title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                    itemsList={movieList && movieList.map((movie: MovieResult, index: number) => (
                        // @ts-ignore
                        <Tile
                            key={movie.id}
                            sizes={posterSizesArray}
                            widths={tileWidths}
                            imageBaseUrl={imgURL}
                            imagePath={movie.poster_path}
                            imageWidth="100%"
                            detailsUrl={`/movie/${movie.id}`}
                            title={movie.title}
                            subtitle={getFullYearFromDate(movieList, index)}
                            genreIds={movie.genre_ids}
                            rating={movie.vote_average}
                            votes={movie.vote_count}
                        />
                    ))}
                />
                {totalPages && < Pager totalPages={totalPages < 500 ? totalPages : 500} property={"/movies"} />}
            </>
        );
    };

    return null;
};
