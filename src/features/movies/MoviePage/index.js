import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
    selectGenresList,
} from "../moviesSlice";
import {
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    selectPosterWidth,
    selectProfileSize,
    selectProfileSizes,
    selectSlideWidth,
    setPosterSize,
    setPosterWidth,
    setProfileSize,
    setSlideWidth
} from "../../../globalSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useGetMovieCredits } from "../useGetMovieCredits";
import { useEffect } from "react";
const Section = React.lazy(() => import('../../../common/SlidesSection'));

const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);
    const posterWidth = useSelector(selectPosterWidth);
    const profileSizes = useSelector(selectProfileSizes);
    const profileSize = useSelector(selectProfileSize);
    const slideWidth = useSelector(selectSlideWidth);
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    const genresList = useSelector(selectGenresList);

    useGetConfig();
    useGetMovieDetails(movieId);
    useGetMovieCredits(movieId);

    // eslint-disable-next-line
    const adjustPhotoSizes = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]));
            dispatch(setPosterWidth("312"));
            dispatch(setProfileSize(profileSizes[2]));
            dispatch(setSlideWidth("208px"));
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
            dispatch(setPosterWidth("312"));
            dispatch(setProfileSize(profileSizes[1]));
            dispatch(setSlideWidth("184px"));
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
            dispatch(setPosterWidth("180"));
            dispatch(setProfileSize(profileSizes[1]));
            dispatch(setSlideWidth("160px"));
        } else {
            dispatch(setPosterSize(posterSizes[1]))
            dispatch(setPosterWidth("114"));
            dispatch(setProfileSize(profileSizes[1]));
            dispatch(setSlideWidth("136px"));
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        adjustPhotoSizes();
    }, [adjustPhotoSizes]);

    window.addEventListener("resize", adjustPhotoSizes);

    return (
        <>
            <Backdrop
                backdropUrl={`${imgURL}original${movieDetails.backdrop_path}`}
                title={movieDetails.original_title}
                rating={movieDetails.vote_average}
                votes={movieDetails.vote_count}
            />
            <Wrapper>
                <Tile
                    oversize
                    imageWidth={posterWidth}
                    key={movieId}
                    movieId={movieId}
                    titleUrl={`/movie/${movieId}`}
                    imageUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
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
                                width={slideWidth}
                                key={movieCast[index].credit_id}
                                titleUrl={`/people/${movieCast[index].id}`}
                                imageUrl={`${imgURL}${profileSize}${movieCast[index].profile_path}`}
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
                                width={slideWidth}
                                key={movieCrew[index].credit_id}
                                titleUrl={`/people/${movieCrew[index].id}`}
                                imageUrl={`${imgURL}${profileSize}${movieCrew[index].profile_path}`}
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