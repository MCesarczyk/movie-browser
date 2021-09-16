import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile"
import searchQueryParamName from "../../Navigation/Search/searchQueryParamName";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectTotalResults,
    setPage,
    setQuery,
} from "../../../globalSlice";
import {
    selectMoviesList,
    fetchMoviesList
} from "../moviesSlice";
import CorePage from "../../../core/CorePage";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const { page } = useParams();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(setQuery(query));
        dispatch(fetchMoviesList());
        // eslint-disable-next-line
    }, [query]);

    useEffect(() => {
        dispatch(setPage(page));
        dispatch(fetchMoviesList());
        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    const movieList = useSelector(selectMoviesList);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const totalResults = useSelector(selectTotalResults);

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[3],
        posterSizes[3],
        posterSizes[3],
        posterSizes[4]
    ];

    const tileWidths = ["100%", "228px", "286px", "286px", "324px"];

    return (
        <CorePage
            body={
                <Section
                    title={query ? `Search results for "${query}" (${totalResults})` : "Popular movies"}
                    itemsList={movieList.map((movie, index) => (
                        <Tile
                            key={movieList[index].id}
                            sizes={posterSizesArray}
                            widths={tileWidths}
                            imageBaseUrl={imgURL}
                            imagePath={movieList[index].poster_path}
                            imageWidth="100%"
                            detailsUrl={`/movie/${movieList[index].id}`}
                            title={movieList[index].title}
                            subtitle={new Date(Date.parse(movieList[index].release_date)).getFullYear()}
                            genreIds={movieList[index].genre_ids}
                            rating={movieList[index].vote_average}
                            votes={movieList[index].vote_count}
                        />
                    ))}
                />
            }
        />
    )
};

export default MoviesPage;