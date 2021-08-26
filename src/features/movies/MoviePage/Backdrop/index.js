import RatingStar from "../../../../common/Tile/RatingStar";
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes } from "./styled";

const Backdrop = ({ backdropUrl, title, rating, votes }) => {
    return (
        <BackdropPoster >
            <WrapperBackdrop >
                <WrapperContent>
                    <Title>{title}</Title>
                    <RatingStar />
                    <RatingScale> {rating}</RatingScale>
                    <Votes>{votes} votes</Votes>
                </WrapperContent>
            </WrapperBackdrop>
        </BackdropPoster>
    );
};

export default Backdrop;