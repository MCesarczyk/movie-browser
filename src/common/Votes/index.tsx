import { NoVotesText, Rating, RatingScale, StyledLogo, VotesWrapper, VotesCount, RatingWrapper } from "./styled";
import { ReactComponent as RatingStarPicture } from "./ratingStar.svg";

interface VotesProps {
    votes: number;
    rating: number;
    backdrop: string;
};

const Votes = ({ votes, rating, backdrop }: VotesProps) => (
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