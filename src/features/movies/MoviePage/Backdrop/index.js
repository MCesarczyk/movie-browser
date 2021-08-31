
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes, BackdropContainer, WrapperRating, RatingStar, Rating } from "./styled";
import ratingStar from "../../../../images/ratingStar.svg";

const Backdrop = ({ backdropUrl, title, rating, votes }) => {
    return (
        <BackdropContainer>
            <BackdropPoster style={{ backgroundImage: `url("${backdropUrl}")` }}>
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                            <WrapperRating>
                                <RatingStar src={ratingStar} alt="" />
                                    <Rating>{rating}</Rating>
                                    <RatingScale>/ 10</RatingScale>
                            </WrapperRating>
                                <Votes>{votes} votes</Votes>
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;