
import {
    BackdropPoster,
    WrapperBackdrop,
    Title,
    WrapperContent,
    RatingScale,
    Votes,
    BackdropContainer,
    WrapperRating,
    RatingStar,
    Rating,
    WrapperExtraContent
} from "./styled";
import ratingStar from "../../../../core/Tile/RatingStar/ratingStar.svg";

const Backdrop = ({
    sizes,
    imageBaseUrl,
    imagePath,
    title,
    rating,
    votes
}) => {
    return (
        <BackdropContainer>
            <BackdropPoster
                sizes={sizes}
                baseUrl={imageBaseUrl}
                path={imagePath}
            >
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                        <WrapperExtraContent>
                            <WrapperRating>
                                <RatingStar src={ratingStar} alt="" />
                                <Rating>{rating}</Rating>
                                <RatingScale>/ 10</RatingScale>
                            </WrapperRating>
                            <Votes>{votes} votes</Votes>
                        </WrapperExtraContent>
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;