import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/moviesSlice";
import Wrapper from "../Wrapper";
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
        <Wrapper>
            <StyledTile>
                <Image src={posterUrl} alt="movie poster" />
                <TileContent>
                    <ActiveTitle to={`/movies/${movieId}`} >
                        <Title>{title}</Title>
                    </ActiveTitle>
                    <SubTitle>{subtitle}</SubTitle>
                    <Details>
                        <DetailTitle>{countries && "Production: "}</DetailTitle>
                        <DetailContent>
                            {countries && countries.map(({ name }) => `${name}, `)}
                        </DetailContent>
                    </Details>
                    <Details>
                        <DetailTitle>{releaseDate && "Release date: "}</DetailTitle>
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
                        {rating && <RatingStar />}
                        <Rating>{rating}</Rating>
                        <RatingScale>{rating && "/ 10"}</RatingScale>
                        <Votes>{votes}{votes && " votes"}</Votes>
                    </ExtraContent>
                    <Description>
                        {overview}
                    </Description>
                </TileContent>
            </StyledTile>
        </Wrapper>
    );
};

export default Tile;