import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/moviesSlice";
import { ReactComponent as NoPictureImage } from "./noPicture.svg";
import { ReactComponent as NoPosterImage } from "./noPoster.svg";
import RatingStar from "./RatingStar/ratingStar.svg";
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
    NoVotesText,
    StyledLogo,
    PlaceholderImageWrapper,
} from "./styled";

const Tile = ({
    widths,
    imageWidth,
    sizes,
    imageBaseUrl,
    imagePath,
    mobile,
    oversize,
    personTile,
    titleUrl,
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

    return (
        <StyledTile
            widths={widths || "100%"}
            oversize={oversize}
            personTile={personTile}
        >
            {imagePath ?
                <Image
                    personTile={personTile}
                    width={imageWidth}
                    mobile={mobile}
                    sizes={sizes}
                    baseUrl={imageBaseUrl}
                    path={imagePath}
                    alt="image"
                />
                :
                personTile ? <PlaceholderImageWrapper width={imageWidth} >
                    <NoPictureImage />
                </PlaceholderImageWrapper>
                :
                <PlaceholderImageWrapper width={imageWidth} >
                    <NoPosterImage />
                </PlaceholderImageWrapper>
            }
            <TileContent>
                <ActiveTitle to={titleUrl} >
                    <Title
                        oversize={oversize}
                        personTile={personTile}
                    >
                        {title}
                    </Title>
                </ActiveTitle>
                {subtitle &&
                    <SubTitle
                        oversize={oversize}
                        personTile={personTile}
                    >
                        {subtitle}
                    </SubTitle>
                }
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
                {birthday &&
                    <Details>
                        <DetailTitle>Date of birth: </DetailTitle>
                        <DetailContent>{birthday}</DetailContent>
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
                {!personTile && (votes === 0 ?
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