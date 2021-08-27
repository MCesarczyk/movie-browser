import RatingStar from "../../../../common/Tile/RatingStar";
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes, BackdropContainer, WrapperRating } from "./styled";

const Backdrop = ({ backdropUrl, title, rating, votes }) => {
    return (
        <BackdropContainer>
            <BackdropPoster style={{ backgroundImage: `url("${backdropUrl}")` }}>
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                            <WrapperRating>
                                <RatingStar />
                                    <RatingScale> {rating}</RatingScale>
                            </WrapperRating>
                                <Votes>{votes} votes</Votes>
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;