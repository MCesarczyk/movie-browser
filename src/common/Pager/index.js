import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPage, selectPage, selectTotalPages } from "../../features/movies/moviesSlice";
import { Wrapper, StyledLink, Button, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = () => {

    const dispatch = useDispatch();

    // const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const params = useParams();
    const page = (params.page ? params.page : 1);

    const checkIfPreviousIsDisabled = () => page === 1 ? true : false;
    const checkIfNextIsDisabled = () => +page === +totalPages ? true : false;

    // const onClickNext = () => dispatch(setPage(page + 1));
    // const onClickLast = () => dispatch(setPage(totalPages));

    return (
        <Wrapper>
            {/* <Button disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                First
            </Button>
            <Button disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                Previous</Button> */}
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
