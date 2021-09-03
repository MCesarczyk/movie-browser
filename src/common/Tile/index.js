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
    TileExtraContent,
    Rating,
    RatingScale,
    Votes,
    Description,
    ActiveTitle,
} from "./styled";

const Tile = ({
    width,
    mobile,
    oversize,
    minimal,
    titleUrl,
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
        <StyledTile oversize={oversize} minimal={minimal} >
            <Image
                width={width}
                mobile={mobile}
                src={imageUrl}
                alt="image"
            />
            <TileContent>
                <ActiveTitle to={titleUrl} >
                    <Title
                        oversize={oversize}
                        minimal={minimal}
                    >
                        {title}
                    </Title>
                </ActiveTitle>
                <SubTitle
                    oversize={oversize}
                    minimal={minimal}
                >
                    {subtitle}
                </SubTitle>
                {countries &&
                    <Details>
                        <DetailTitle>Production: </DetailTitle>
                        <DetailContent>
                            {countries && countries.map(({ name }) => name).join(", ")}
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
                        {genres && genreIds && genreIds.map(genreId => (
                            <Tag key={genreId}>
                                {genres[genres.findIndex(
                                    ({ id }) => id === genreId
                                )].name}
                            </Tag>
                        ))}
                    </Tags>
                }
                {genresList &&
                    <Tags oversize >
                        {genresList.map((item, index) => (
                            <Tag oversize key={genresList[index].id}>
                                {genresList[index].name}
                            </Tag>
                        ))}
                    </Tags>
                }
                {rating && votes &&
                    <TileExtraContent>
                        <RatingStar />
                        <Rating>{rating}</Rating>
                        <RatingScale>/ 10</RatingScale>
                        <Votes>{votes} votes</Votes>
                    </TileExtraContent>
                }
            </TileContent>
            {overview &&
                <Description>
                    {overview}
                </Description>
            }
        </StyledTile>
    );
};

export default Tile;