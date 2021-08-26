import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/moviesSlice";
import { Container } from "../Container";
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
    ActiveTitle,
} from "./styled";

const Tile = ({
    movieId,
    posterUrl,
    title,
    subtitle,
    countries,
    releaseDate,
    genreIds,
    rating,
    votes,
    overview
}) => {
    const genres = useSelector(selectGenres);

    return (
        <Container>
        <StyledTile>
            <Image src={posterUrl} alt="movie poster" />
            <TileContent>
                <ActiveTitle to={`/movies/${movieId}`} >
                    <Title>{title}</Title>
                </ActiveTitle>
                <SubTitle>{subtitle}</SubTitle>
                <Details>
                    <DetailTitle>Production: </DetailTitle>
                    <DetailContent>
                        {countries && countries.map(({ name }) => `${name}, `)}
                    </DetailContent>
                </Details>
                <Details>
                    <DetailTitle>Release date: </DetailTitle>
                    <DetailContent>{releaseDate}</DetailContent>
                </Details>
                <Tags>
                    {genreIds && genreIds.map(genreId => (
                        <Tag key={genreId}>
                            {genres[genres.findIndex(
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
        </Container>
    );
};

export default Tile;