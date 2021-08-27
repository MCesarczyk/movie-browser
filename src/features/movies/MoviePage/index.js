import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Backdrop from "./Backdrop";
import { SectionContainer, SectionTitle } from "./styled";
import { selectMovieDetails } from "../moviesSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import {
    selectBackdropSize,
    selectBackdropSizes,
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    setBackdropSize,
    setPosterSize
} from "../../../configSlice";

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);
    const backdropSizes = useSelector(selectBackdropSizes);
    const backdropSize = useSelector(selectBackdropSize);

    useGetConfig();
    useGetMovieDetails(movieId);

    const onPageResize = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]))
            dispatch(setBackdropSize(backdropSizes[4]))
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
            dispatch(setBackdropSize(backdropSizes[3]))
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
            dispatch(setBackdropSize(backdropSizes[2]))
        } else {
            dispatch(setPosterSize(posterSizes[1]))
            dispatch(setBackdropSize(backdropSizes[1]))
        };
    };

    window.addEventListener("resize", onPageResize);

    return (
        <>
            <Backdrop
                backdropUrl={`${imgURL}${backdropSize}${movieDetails.backdrop_path}`}
                title={movieDetails && movieDetails.original_title}
                rating={movieDetails && movieDetails.vote_average}
                votes={movieDetails && movieDetails.vote_count}
            />
            <Wrapper>
                <Tile
                    key={movieId}
                    posterUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
                    title={movieDetails && movieDetails.title}
                    // subtitle={movieDetails && new Date(Date.parse(movieDetails.release_date)).getFullYear()}
                    countries={movieDetails && movieDetails.production_countries}
                    releaseDate={movieDetails && movieDetails.release_date}
                    // genreIds={movieDetails && movieDetails.genre_ids}
                    rating={movieDetails && movieDetails.vote_average}
                    votes={movieDetails && movieDetails.vote_count}
                    overview={movieDetails && movieDetails.overview}
                />
                <section>
                    <SectionTitle>Cast</SectionTitle>
                    <SectionContainer>
                        <Tile
                            key={""}
                            posterUrl={""}
                            title={""}
                            subtitle={""}
                        />
                    </SectionContainer>
                </section>
            </Wrapper>
        </>
    );
};

export default MoviePage;