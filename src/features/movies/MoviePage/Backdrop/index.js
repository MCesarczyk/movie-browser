import RatingStar from "../../../../common/Tile/RatingStar";
import { BackdropPoster, WrapperBackdrop, Title, WrapperContent, RatingScale, Votes } from "./styled";

const Backdrop = () => {
    return (
        <BackdropPoster>
            <WrapperBackdrop >
                <WrapperContent>
                    <Title>tytuł</Title>
                    <RatingStar />
                    <RatingScale> 10</RatingScale>
                    <Votes>335 votes</Votes>
                </WrapperContent>
            </WrapperBackdrop>
        </BackdropPoster>
    );
};

export default Backdrop;