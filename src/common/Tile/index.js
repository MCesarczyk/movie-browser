import poster from "../../images/poster.jpg"
import RatingStar from "./RatingStar";
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
    ExtraContent,
    Rating,
    RatingScale,
    Votes,
    Description,
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
            <ExtraContent>
                <RatingStar />
                <Rating>7,8</Rating>
                <RatingScale>/ 10</RatingScale>
                <Votes>335 votes</Votes>
            </ExtraContent>
            <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
        </TileContent>
    </StyledTile>
);

export default Tile;