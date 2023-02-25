import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { MovieResult } from "../interfaces";
import Section from "common/Section";
import { selectImagesBaseURL, selectPosterSizes } from "commonSlice";
import Tile from "core/Tile"
import { Pager } from "core/Pager";
import searchQueryParamName from "features/search/searchQueryParamName";
import { moviesApiAdapter } from "features/movies/moviesApiAdapter";
import LoadingPage from "core/CorePage/LoadingPage";
import { ErrorPage } from "core/CorePage/ErrorPage/ErrorPage";


export const MoviesPage = () => {
    const { page }: any = useParams();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

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

    const { status, error, data } = useQuery(["movie/popular", { page }], () => moviesApiAdapter.getMoviesByPage(page));

    const movieList = data?.results || null;
    const totalPages = data?.total_pages || null;

    if (status === "loading") {
        return <LoadingPage
            message="Loading movies list..."
            query={query}
        />
    };

    if (status === "error") {
        return <ErrorPage error={error as Error} />
    }

    if (status === "success") {
        return (
            <>
                <Section
                    // title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                    title={"Popular movies"}
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
                {totalPages && < Pager totalPages={500} property={"/movies"} />}
            </>
        );
    };

    return null;
};
