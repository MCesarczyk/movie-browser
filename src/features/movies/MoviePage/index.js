import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import {
    selectBackdropSizes,
    selectImagesBaseURL,
    selectPosterSizes,
    selectProfileSizes,
    selectState,
    setId,
} from "../../../globalSlice";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
    fetchMovieDetails,
    fetchMovieCredits,
} from "../moviesSlice";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
const PeopleList = React.lazy(() => import('../../../common/PeopleList'));

const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movieState = useSelector(selectState);
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const backdropSizes = useSelector(selectBackdropSizes);
    const profileSizes = useSelector(selectProfileSizes);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const genresList = useSelector(selectGenresList);

    useEffect(() => {
        dispatch(setId(id));
        dispatch(fetchMovieDetails());
        dispatch(fetchMovieCredits());
        // eslint-disable-next-line
    }, [id]);

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

    const personTileWidths = ["144px", "160px", "184px", "208px", "208px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];

    return (
        <>
            {movieState === "loading" &&
                <LoadingPage
                    message="Loading movie details..."
                />
            }
            {
                movieState === "error" &&
                <ErrorPage />
            }
            {
                movieState === "success" && movieDetails &&
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
                            key={id}
                            sizes={posterSizesArray}
                            imageBaseUrl={imgURL}
                            imagePath={movieDetails.poster_path}
                            detailsUrl={`/movie/${id}`}
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
                            {movieCast && movieCast.length > 0 && <PeopleList
                                title="Cast"
                                body={movieCast && movieCast.map((person, index) => (
                                    <Tile
                                        personTile
                                        widths={personTileWidths}
                                        key={movieCast[index].credit_id}
                                        sizes={profileSizesArray}
                                        imageBaseUrl={imgURL}
                                        imagePath={movieCast[index].profile_path}
                                        detailsUrl={`/person/${movieCast[index].id}`}
                                        title={movieCast[index].name}
                                        subtitle={movieCast[index].character}
                                    />
                                ))}
                            />}
                            {movieCrew && movieCrew.length > 0 && <PeopleList
                                title="Crew"
                                body={movieCrew && movieCrew.map((person, index) => (
                                    <Tile
                                        personTile
                                        widths={personTileWidths}
                                        key={movieCrew[index].credit_id}
                                        sizes={profileSizesArray}
                                        detailsUrl={`/person/${movieCrew[index].id}`}
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
            }
        </>
    );
};

export default MoviePage;