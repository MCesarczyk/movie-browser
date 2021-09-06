
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
import ratingStar from "../../../../common/Tile/RatingStar/ratingStar.svg";

const Backdrop = ({
    size1,
    size2,
    size3,
    size4,
    size5,
    imageBaseUrl,
    imagePath,
    title,
    rating,
    votes
}) => {
    return (
        <BackdropContainer>
            <BackdropPoster
                size1={size1}
                size2={size2}
                size3={size3}
                size4={size4}
                size5={size5}
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