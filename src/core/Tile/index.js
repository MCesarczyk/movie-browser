import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/moviesSlice";
import { ReactComponent as NoPictureImage } from "./noPicture.svg";
import { ReactComponent as NoPosterImage } from "./noPoster.svg";
import RatingStar from "./RatingStar/ratingStar.svg";
import {
    StyledTile,
    ImageWrapper,
    Image,
    PlaceholderImageWrapper,
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
    NoVotesText,
    StyledLogo,
} from "./styled";

const Tile = ({
    mobile,
    oversize,
    person,
    oversizepersontile,
    detailsUrl,
    imageBaseUrl,
    widths,
    imageWidth,
    sizes,
    imagePath,
    title,
    subtitle,
    countries,
    releaseDate,
    birthday,
    birthPlace,
    genreIds,
    genresList,
    rating,
    votes,
    overview
}) => {
    const genres = useSelector(selectGenres);

    const convertDate = (input) => {
        const date = new Date(input).toLocaleDateString();
        return date;
    };

    return (
        <StyledTile
            to={detailsUrl}
            widths={widths || "100%"}
            oversize={oversize}
            person={person}
        >
            {imagePath ?
                <ImageWrapper>
                    <Image
                        oversize={oversize}
                        person={person}
                        width={imageWidth}
                        mobile={mobile}
                        sizes={sizes}
                        baseUrl={imageBaseUrl}
                        path={imagePath}
                        alt="image"
                    />
                </ImageWrapper>
                :
                (person || oversizepersontile) ?
                    <PlaceholderImageWrapper width={imageWidth} mobile={mobile} >
                        <NoPictureImage />
                    </PlaceholderImageWrapper>
                    :
                    <PlaceholderImageWrapper width={imageWidth} mobile={mobile} >
                        <NoPosterImage />
                    </PlaceholderImageWrapper>
            }
            <TileContent>
                <Title
                    oversize={oversize}
                    person={person}
                >
                    {title}
                </Title>
                {subtitle &&
                    <SubTitle
                        oversize={oversize}
                        person={person}
                    >
                        {subtitle}
                    </SubTitle>
                }
                {countries && countries.length > 0 &&
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
                        <DetailContent>{convertDate(releaseDate)}</DetailContent>
                    </Details>
                }
                {birthday &&
                    <Details>
                        <DetailTitle>Date of birth: </DetailTitle>
                        <DetailContent>{convertDate(birthday)}</DetailContent>
                    </Details>
                }
                {birthPlace &&
                    <Details>
                        <DetailTitle>Place of birth: </DetailTitle>
                        <DetailContent>{birthPlace}</DetailContent>
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
                {!person && (votes === 0 ?
                    <TileExtraContent>
                        <NoVotesText>No votes yet</NoVotesText>
                    </TileExtraContent>
                    :
                    votes && <TileExtraContent>
                        <StyledLogo src={RatingStar} />
                        <Rating>{rating}</Rating>
                        <RatingScale>/ 10</RatingScale>
                        <Votes>{votes}&nbsp;votes</Votes>
                    </TileExtraContent>
                )}
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