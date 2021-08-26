import { useDispatch, useSelector } from "react-redux";
import Tile from "../../../common/Tile"
import Wrapper from "../../../common/Wrapper";
import Backdrop from "./Backdrop";
import { SectionContainer, SectionTitle } from "./styled";
import { selectImagesBaseURL, selectPosterSize, selectPosterSizes, setPosterSize } from "../../../configSlice";
import { selectMovieDetails } from "../moviesSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieId = id;
    const movieDetails = useSelector(selectMovieDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const posterSize = useSelector(selectPosterSize);

    useGetConfig();
    useGetMovieDetails(movieId);

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
        <Container>
          <Backdrop />
            <Wrapper>
            <Tile
                key={movieId}
                posterUrl={movieDetails && `${imgURL}${posterSize}${movieDetails.poster_path}`}
                title={movieDetails && movieDetails.title}
                // subtitle={movieDetails && new Date(Date.parse(movieDetails.release_date)).getFullYear()}
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
          </Wrapper>
        </Container>
      </>
    );
};

export default MoviePage;