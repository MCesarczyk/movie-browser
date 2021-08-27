
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes, BackdropContainer, WrapperRating, RatingStar } from "./styled";
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
                                    <RatingScale>{rating}</RatingScale>&nbsp;/&nbsp;10
                            </WrapperRating>
                                <Votes>{votes} votes</Votes>
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;