import { useContext, useEffect } from "react";

import Section from "common/Section";
import { MovieResult } from "./interfaces";
import Tile from "core/Tile"
import { Pager } from "core/Pager";
import { CorePage } from "core/CorePage";
import { useMoviesApiService } from "./moviesApiService";
import { API_TOTAL_PAGES_LIMIT, MOVIES_LIST_URL, MOVIE_DETAILS_URL } from "./constants";
import { ImagesConfigContext } from "services/ImagesConfigContext";


export const MoviesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { baseUrl, posterSizes } = useContext(ImagesConfigContext);

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

    return (
        <CorePage
            status={status}
            error={error}
            query={query}
            isDataPresent={!!totalResults}
            loadingMessage="Loading movies list..."
            isFetching={!!isFetching}
        >

            <>
                <Section
                    isObsolete={isPreviousData}
                    title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                    itemsList={movieList && movieList.map((movie: MovieResult, index: number) => (
                        // @ts-ignore
                        <Tile
                            key={movie.id}
                            sizes={posterSizesArray}
                            widths={tileWidths}
                            imageBaseUrl={baseUrl}
                            imagePath={movie.poster_path}
                            imageWidth="100%"
                            detailsUrl={`${MOVIE_DETAILS_URL}/${movie.id}`}
                            title={movie.title}
                            subtitle={getFullYearFromDate(movieList, index)}
                            genreIds={movie.genre_ids}
                            rating={movie.vote_average}
                            votes={movie.vote_count}
                        />
                    ))}
                />
                {totalPages && (
                    <Pager
                        totalPages={
                            totalPages < API_TOTAL_PAGES_LIMIT
                                ? totalPages
                                : API_TOTAL_PAGES_LIMIT
                        }
                        property={MOVIES_LIST_URL}
                    />
                )}
            </>
        </CorePage>
    );
};
