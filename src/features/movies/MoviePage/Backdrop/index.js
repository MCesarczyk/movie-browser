import RatingStar from "../../../../common/Tile/RatingStar";
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes, BackdropContainer } from "./styled";

const Backdrop = ({ backdropUrl, title, rating, votes }) => {
    return (
        <BackdropContainer>
            <BackdropPoster style={{ backgroundImage: `url("${backdropUrl}")` }}>
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                        <RatingStar />
                        <RatingScale> {rating}</RatingScale>
                        <Votes>{votes} votes</Votes>
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export default Backdrop;