import { NoVotesText, Rating, RatingScale, StyledLogo, TileExtraContent, VotesCount } from "./styled";
import { ReactComponent as RatingStarPicture } from "./ratingStar.svg";

const Votes = ({ votes, rating }) => (
    <TileExtraContent>
        {votes === 0 ?
            <NoVotesText>No votes yet</NoVotesText>
            :
            <>
                <StyledLogo>
                    <RatingStarPicture />
                </StyledLogo>
                <Rating>{rating}</Rating>
                <RatingScale>/ 10</RatingScale>
                <VotesCount>
                    {votes}&nbsp;vote{votes > 1 ? "s" : ""}
                </VotesCount>
            </>}
    </TileExtraContent>
);

export default Votes;