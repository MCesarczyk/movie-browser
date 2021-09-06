
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

const Backdrop = ({ backdropUrl, title, rating, votes }) => {
    return (
        <BackdropContainer>
            <BackdropPoster style={{ backgroundImage: `url("${backdropUrl}")` }}>
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