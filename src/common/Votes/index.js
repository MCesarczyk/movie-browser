import { NoVotesText, Rating, RatingScale, StyledLogo, VotesWrapper, VotesCount, RatingWrapper } from "./styled";
import { ReactComponent as RatingStarPicture } from "./ratingStar.svg";

const Votes = ({ votes, rating, backdrop }) => (
    <VotesWrapper backdrop={backdrop} >
        {votes === 0 ?
            <NoVotesText>No votes yet</NoVotesText>
            :
            <>
                <RatingWrapper backdrop={backdrop} >
                    <StyledLogo backdrop={backdrop} >
                        <RatingStarPicture />
                    </StyledLogo>
                    <Rating backdrop={backdrop}>{rating}</Rating>
                    <RatingScale backdrop={backdrop}>/ 10</RatingScale>
                </RatingWrapper>
                <VotesCount backdrop={backdrop}>
                    {votes}&nbsp;vote{votes > 1 ? "s" : ""}
                </VotesCount>
            </>}
    </VotesWrapper>
);

export default Votes;