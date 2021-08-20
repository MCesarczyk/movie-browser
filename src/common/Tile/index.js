import poster from "../../images/poster.jpg"
import { StyledTile, Image, Title, SubTitle, TileContent } from "./styled";

const Tile = () => (
    <StyledTile>
        <Image src={poster} alt="movie poster" />
        <TileContent>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
        </TileContent>
    </StyledTile>
);

export default Tile;