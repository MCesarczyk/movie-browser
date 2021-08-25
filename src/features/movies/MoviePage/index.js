import Tile from "../../../common/Tile"
import { SectionContainer, SectionTitle } from "./styled";

const MoviePage = ({ id }) => {
    const id = 451048;
    return (
        <MoviesList title="Movie" >
            {movieState === "loading" ? (
                <LoadingPage />
            ) : (
                movieState === "Error" ? (
                    <ErrorPage />
                ) : (
                    <>
                        <div>Backdrop</div>
                        <Tile
                            key={movieList && movieList[id].id}
                            posterUrl={movieList && `${imgURL}${posterSize}${movieList[id].poster_path}`}
                            title={movieList && movieList[id].title}
                            subtitle={movieList && new Date(Date.parse(movieList[id].release_date)).getFullYear()}
                            countries={movieList && moviesDetails[id].production_countries}
                            releaseDate={movieList && movieList[id].release_date}
                            genreIds={movieList && movieList[id].genre_ids}
                            rating={movieList && movieList[id].vote_average}
                            votes={movieList && movieList[id].vote_count}
                            overview={movieList && movieList[id].overview}
                        />
                        <section>
                            <SectionTitle>Cast</SectionTitle>
                            <SectionContainer>
                                <Tile
                                    key={ }
                                    posterUrl={ }
                                    title={ }
                                    subtitle={ }
                                />
                            </SectionContainer>
                        </section>
                        <section>
                            <SectionTitle>Cast</SectionTitle>
                            <SectionContainer>
                                <Tile
                                    key={ }
                                    posterUrl={ }
                                    title={ }
                                    subtitle={ }
                                />
                            </SectionContainer>
                        </section>
                    </>
                ))}
        </MoviesList>
    );
};

export default MoviePage;