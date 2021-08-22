import Tile from "../../../../common/Tile"
import { useGetPopularMovies } from "./useGetPopularMovies";

const MovieList = () => {
    useGetPopularMovies();

    return (
        <div title="Movies">
            <Tile />
        </div>
    )
};

export default MovieList;