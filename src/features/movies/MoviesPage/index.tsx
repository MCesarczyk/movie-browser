import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { MovieResult } from "types";
import Section from "common/Section";
import { selectImagesBaseURL, selectPosterSizes } from "commonSlice";
import Tile from "core/Tile"
import Pager from "core/Pager";
import CorePage from "core/CorePage";
import searchQueryParamName from "features/search/searchQueryParamName";
import {
    clearMoviesList,
    selectMoviesResults,
    setMoviesQuery,
    setMoviesPage,
    selectMoviesTotalResults
} from "features/movies/moviesSlice";


const MoviesPage = () => {
    const dispatch = useDispatch();
    const { page }: any = useParams();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(setMoviesQuery(query));
    }, [dispatch, query]);

    useEffect(() => {
        dispatch(setMoviesPage(page as string || "1"));
    }, [dispatch, page]);

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            dispatch(clearMoviesList());
        }
        // eslint-disable-next-line
    }, []);

    const movieList = useSelector(selectMoviesResults);
    const totalResults = useSelector(selectMoviesTotalResults);
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

    return (
        <CorePage
            message="Loading movies list..."
            body={
                <>
                    <Section
                        title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                        itemsList={movieList && movieList.map((movie, index) => (
                            // @ts-ignore
                            <Tile
                                key={movieList[index].id}
                                sizes={posterSizesArray}
                                widths={tileWidths}
                                imageBaseUrl={imgURL}
                                imagePath={movieList[index].poster_path}
                                imageWidth="100%"
                                detailsUrl={`/movie/${movieList[index].id}`}
                                title={movieList[index].title}
                                subtitle={getFullYearFromDate(movieList, index)}
                                genreIds={movieList[index].genre_ids}
                                rating={movieList[index].vote_average}
                                votes={movieList[index].vote_count}
                            />
                        ))}
                    />
                    < Pager property={"/movies"} />
                </>
            }
        />
    )
};

export default MoviesPage;