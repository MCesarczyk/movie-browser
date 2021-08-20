import poster from "../../images/poster.jpg"
import { StyledTile, Image } from "./styled";

const Tile = () => (
    <StyledTile>
        <Image src={poster} alt="movie poster" />
        test
    </StyledTile>
);

export default Tile;