import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTotalPages } from "../../features/movies/moviesSlice";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = () => {

    const totalPages = useSelector(selectTotalPages);
    const params = useParams();
    const page = (params.page ? params.page : 1);

    const checkIfPreviousIsDisabled = () => +page === 1 ? true : false;
    const checkIfNextIsDisabled = () => +page === +totalPages ? true : false;

    return (
        <Wrapper>
            <StyledLink to={`/movies/1`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                First
            </StyledLink>
            <StyledLink to={`/movies/${+page === 1 ? 1 : +page - 1}`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                Previous
            </StyledLink>

            <PagerText>Page</PagerText>
            <PageNumberText>{page}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>

            <StyledLink to={`/movies/${+page === +totalPages ? +page : +page + 1}`} disabled={checkIfNextIsDisabled()}>
                Next
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
            <StyledLink to={`/movies/${totalPages}`} disabled={checkIfNextIsDisabled()}>
                Last
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
        </Wrapper>
    );
};

export default Pager;
