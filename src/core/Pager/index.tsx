import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { SEARCH_QUERY_PARAM_NAME } from "features/search/constants";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import PreviousIcon from "./PreviousIcon";
import NextIcon from "./NextIcon";


interface PagerProps {
    property: string;
    totalPages: number;
};

export const Pager = ({ property, totalPages }: PagerProps) => {
    const { page } = useParams<{ page: string }>();
    let currentPage = (page ? page : 1);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(SEARCH_QUERY_PARAM_NAME);

    const navigate = useNavigate();
    const firstPageUrl = `${property}/1${query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""}`;
    totalPages && (currentPage > totalPages) && navigate(firstPageUrl);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => setWindowWidth(window.innerWidth);
    const mobileMax = 767;

    const checkIfPreviousIsDisabled = () => +currentPage === 1 ? true : false;
    const checkIfNextIsDisabled = () => (totalPages && +currentPage === +totalPages) ? true : false;

    return (
        <Wrapper>
            <StyledLink
                to={firstPageUrl}
                disabled={checkIfPreviousIsDisabled()}
            >
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                {windowWidth < mobileMax ?
                    <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                    : "First"
                }
            </StyledLink>
            <StyledLink
                to={
                    `${property}/${+currentPage === 1 ? 1 : +currentPage - 1}${query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""}`
                }
                disabled={checkIfPreviousIsDisabled()}
            >
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                {windowWidth < mobileMax ? "" : "Previous"}
            </StyledLink>

            <PagerText>Page</PagerText>
            <PageNumberText>{currentPage}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>

            <StyledLink
                to={
                    `${property}/${(totalPages && +currentPage === +totalPages)
                        ? +currentPage
                        : +currentPage + 1
                    }${query
                        ? `?${SEARCH_QUERY_PARAM_NAME}=${query}`
                        : ""
                    }`
                }
                disabled={checkIfNextIsDisabled()}
            >
                {windowWidth < mobileMax ? "" : "Next"}
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
            <StyledLink to={
                `${property}/${totalPages}${query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""}`
            }
                disabled={checkIfNextIsDisabled()}
            >
                {windowWidth < mobileMax ?
                    <NextIcon disabled={checkIfNextIsDisabled()} />
                    : "Last"
                }
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
        </Wrapper>
    );
};
