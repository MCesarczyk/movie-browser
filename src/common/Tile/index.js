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
    ActiveTitle,
} from "./styled";

const Tile = ({
    oversize,
    imageWidth,
    movieId,
    imageUrl,
    title,
    subtitle,
    countries,
    releaseDate,
    genreIds,
    genresList,
    rating,
    votes,
    overview
}) => {
    const genres = useSelector(selectGenres);

    return (
        <StyledTile oversize={oversize} >
            <Image src={imageUrl} width={imageWidth} alt="image" />
            <TileContent>
                <ActiveTitle to={`/movies/${movieId}`} >
                    <Title>{title}</Title>
                </ActiveTitle>
                <SubTitle>{subtitle}</SubTitle>
                {countries &&
                    <Details>
                        <DetailTitle>Production: </DetailTitle>
                        <DetailContent>
                            {countries && countries.map(({ name }) => `${name}, `)}
                        </DetailContent>
                    </Details>
                }
                {releaseDate &&
                    <Details>
                        <DetailTitle>Release date: </DetailTitle>
                        <DetailContent>{releaseDate}</DetailContent>
                    </Details>
                }
                {genreIds &&
                    <Tags>
                        {genreIds.map(genreId => (
                            <Tag key={genreId}>
                                {genres[genres.findIndex(
                                    ({ id }) => id === genreId
                                )].name}
                            </Tag>
                        ))}
                    </Tags>
                }
                {genresList &&
                    <Tags>
                        {genresList.map((item, index) => (
                            <Tag key={genresList[index].id}>
                                {genresList[index].name}
                            </Tag>
                        ))}
                    </Tags>
                }
                {rating && votes &&
                    <ExtraContent>
                        <RatingStar />
                        <Rating>{rating}</Rating>
                        <RatingScale>/ 10</RatingScale>
                        <Votes>{votes} votes</Votes>
                    </ExtraContent>
                }
                {overview &&
                    <Description>
                        {overview}
                    </Description>
                }
            </TileContent>
        </StyledTile>
    );
};

export default Tile;