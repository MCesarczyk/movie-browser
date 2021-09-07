import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTotalPages, setState } from "../../globalSlice";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = ({ property }) => {
    const dispatch = useDispatch();
    const { page } = useParams();
    const currentPage = (page ? page : 1);

    const totalPages = useSelector(selectTotalPages);
    currentPage > totalPages && dispatch(setState("error"));

    const mobileMax = 767;
    const windowWidth = window.innerWidth;
    console.log(windowWidth);

    const checkIfPreviousIsDisabled = () => +currentPage === 1 ? true : false;
    const checkIfNextIsDisabled = () => +currentPage === +totalPages ? true : false;

    return (
        <Wrapper>
            <StyledLink to={`/${property}/1`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                First
            </StyledLink>
            <StyledLink to={`/${property}/${+currentPage === 1 ? 1 : +currentPage - 1}`} disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                Previous
            </StyledLink>

            <PagerText>Page</PagerText>
            <PageNumberText>{currentPage}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>

            <StyledLink to={`/${property}/${+currentPage === +totalPages ? +currentPage : +currentPage + 1}`} disabled={checkIfNextIsDisabled()}>
                Next
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
            <StyledLink to={`/${property}/${totalPages}`} disabled={checkIfNextIsDisabled()}>
                {windowWidth < mobileMax ? <NextIcon disabled={checkIfNextIsDisabled()} /> : "Last"}
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
        </Wrapper>
    );
};

export default Pager;
