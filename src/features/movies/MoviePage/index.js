import { useDispatch, useSelector } from "react-redux";
import Tile from "../../../common/Tile"
import { SectionContainer, SectionTitle } from "./styled";
import { selectImagesBaseURL, selectPosterSizes, setPosterSize } from "../../../configSlice";
import { selectMovieDetails } from "../moviesSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";

const MoviePage = () => {
    const dispatch = useDispatch();
    const id = 436969;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = "w500";

    useGetConfig();
    useGetMovieDetails(id);

    const onPageResize = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]))
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
        } else {
            dispatch(setPosterSize(posterSizes[1]))
        };
    };

    window.addEventListener("resize", onPageResize);

    return (
        <>
            <div>Backdrop</div>
            <Tile
                key={movieDetails && movieDetails.id}
                posterUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
                title={movieDetails && movieDetails.title}
                subtitle={movieDetails && new Date(Date.parse(movieDetails.release_date)).getFullYear()}
                countries={movieDetails && movieDetails.production_countries}
                releaseDate={movieDetails && movieDetails.release_date}
                genreIds={movieDetails && movieDetails.genre_ids}
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
        </>
    );
};

export default MoviePage;