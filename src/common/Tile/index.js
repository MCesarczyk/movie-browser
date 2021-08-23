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

const Tile = ({ title, posterUrl, releaseDate, rating, votes, overview }) => (
    <StyledTile>
        <Image src={posterUrl} alt="movie poster" />
        <TileContent>
            <Title>{title}</Title>
            <SubTitle>2020</SubTitle>
            <Details>
                <DetailTitle>Production: </DetailTitle>
                <DetailContent>China, United States of America</DetailContent>
            </Details>
            <Details>
                <DetailTitle>Release date: </DetailTitle>
                <DetailContent>{releaseDate}</DetailContent>
            </Details>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
            <ExtraContent>
                <RatingStar />
                <Rating>{rating}</Rating>
                <RatingScale>/ 10</RatingScale>
                <Votes>{votes} votes</Votes>
            </ExtraContent>
            <Description>
                {overview}
            </Description>
        </TileContent>
    </StyledTile>
);

export default Tile;