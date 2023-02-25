import { useState } from "react";
// import { useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";

import searchQueryParamName from "features/search/searchQueryParamName";
// import { selectMoviesTotalPages } from "features/movies/moviesSlice";
// import { selectPeopleTotalPages } from "features/people/peopleSlice";
import { Wrapper, StyledLink, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";


interface PagerProps {
    property: string;
    totalPages: number;
};

const Pager = ({ property, totalPages }: PagerProps) => {
    const { page } = useParams<{ page: string }>();
    let currentPage = (page ? page : 1);

    // const moviesTotalPages = useSelector(selectMoviesTotalPages);
    // const peopleTotalPages = useSelector(selectPeopleTotalPages);
    // const totalPages = property === "/movies" ? moviesTotalPages : peopleTotalPages;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const history = useHistory();
    const firstPageUrl = `${property}/1${query ? `?${searchQueryParamName}=${query}` : ""}`;
    totalPages && (currentPage > totalPages) && history.push(firstPageUrl);

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
                    `${property}/${+currentPage === 1 ? 1 : +currentPage - 1}${query ? `?${searchQueryParamName}=${query}` : ""}`
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
                        ? `?${searchQueryParamName}=${query}`
                        : ""
                    }`
                }
                disabled={checkIfNextIsDisabled()}
            >
                {windowWidth < mobileMax ? "" : "Next"}
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </StyledLink>
            <StyledLink to={
                `${property}/${totalPages}${query ? `?${searchQueryParamName}=${query}` : ""}`
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

export default Pager;
