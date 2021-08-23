import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/moviesSlice";
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

const Tile = ({
    title,
    subtitle,
    posterUrl,
    releaseDate,
    genreIds,
    rating,
    votes,
    overview
}) => {
    const genres = useSelector(selectGenres);

    return (
        <StyledTile>
            <Image src={posterUrl} alt="movie poster" />
            <TileContent>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <Details>
                    <DetailTitle>Production: </DetailTitle>
                    <DetailContent>China, United States of America</DetailContent>
                </Details>
                <Details>
                    <DetailTitle>Release date: </DetailTitle>
                    <DetailContent>{releaseDate}</DetailContent>
                </Details>
                <Tags>
                    {genreIds.map(genreId => (
                        <Tag>
                            {genres.genres[genres.genres.findIndex(
                                ({ id }) => id === genreId
                            )].name}
                        </Tag>
                    ))}
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
};

export default Tile;