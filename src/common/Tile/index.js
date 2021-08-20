import poster from "../../images/poster.jpg"
import {
    StyledTile,
    Image,
    Title,
    SubTitle,
    TileContent,
    Details,
    DetailTitle,
    DetailContent,
    Tags,
    Tag,
} from "./styled";

const Tile = () => (
    <StyledTile>
        <Image src={poster} alt="movie poster" />
        <TileContent>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
            <Details>
                <DetailTitle>Production: </DetailTitle>
                <DetailContent>China, United States of America</DetailContent>
            </Details>
            <Details>
                <DetailTitle>Release date: </DetailTitle>
                <DetailContent>24.10.2020</DetailContent>
            </Details>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
        </TileContent>
    </StyledTile>
);

export default Tile;