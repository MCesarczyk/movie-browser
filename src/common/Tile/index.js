import poster from "../../images/poster.jpg"
import { StyledTile, Image, Title } from "./styled";

const Tile = () => (
    <StyledTile>
        <Image src={poster} alt="movie poster" />
        <Title>Mulan</Title>
    </StyledTile>
);

export default Tile;