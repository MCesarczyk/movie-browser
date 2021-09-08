import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { selectTotalPages, setState } from "../../globalSlice";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import searchQueryParamName from "../../features/Navigation/Search/searchQueryParamName";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = ({ property }) => {
    const dispatch = useDispatch();
    const { page } = useParams();
    const location = useLocation();
    const currentPage = (page ? page : 1);

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const totalPages = useSelector(selectTotalPages);
    currentPage > totalPages && dispatch(setState("error"));

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => setWindowWidth(window.innerWidth);
    const mobileMax = 767;

    const checkIfPreviousIsDisabled = () => +currentPage === 1 ? true : false;
    const checkIfNextIsDisabled = () => +currentPage === +totalPages ? true : false;

    return (
        <Wrapper>
            <StyledLink
                to={`/${property}/1${query ? `?${searchQueryParamName}=${query}` : ""}`}
                disabled={checkIfPreviousIsDisabled()}
            >
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                {windowWidth < mobileMax ? <PreviousIcon disabled={checkIfPreviousIsDisabled()} /> : "First"}
            </StyledLink>
            <StyledLink
                to={`/${property}/${+currentPage === 1 ? 1 : +currentPage - 1}${query ? `?${searchQueryParamName}=${query}` : ""}`}
                disabled={checkIfPreviousIsDisabled()}
            >
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                {windowWidth < mobileMax ? "" : "Previous"}
            </StyledLink>

            <PagerText>Page</PagerText>
            <PageNumberText>{currentPage}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>

            <StyledLink to={`/${property}/${+currentPage === +totalPages ? +currentPage : +currentPage + 1}`} disabled={checkIfNextIsDisabled()}>
                {windowWidth < mobileMax ? "" : "Next"}
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


