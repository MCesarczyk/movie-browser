import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTotalPages } from "../../features/movies/moviesSlice";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = () => {

    const totalPages = useSelector(selectTotalPages);
    const { page } = useParams();
    const currentPage = (page ? page : 1);

    const checkIfPreviousIsDisabled = () => +currentPage === 1 ? true : false;
    const checkIfNextIsDisabled = () => +currentPage === +totalPages ? true : false;

    return (
        <Wrapper>
            <StyledLink to={`/movies/1`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                First
            </StyledLink>
            <StyledLink to={`/movies/${+currentPage === 1 ? 1 : +currentPage - 1}`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                Previous
            </StyledLink>

            <PagerText>Page</PagerText>
            <PageNumberText>{currentPage}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>

            <StyledLink to={`/movies/${+currentPage === +totalPages ? +currentPage : +currentPage + 1}`} disabled={checkIfNextIsDisabled()}>
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
