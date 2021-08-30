import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPage, selectPage, selectTotalPages } from "../../features/movies/moviesSlice";
import { Wrapper, Button, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = () => {

    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    const checkIfPreviousIsDisabled = () => page === 1 ? true : false;
    const checkIfNextIsDisabled = () => page === totalPages ? true : false;

    const onClickNext = () => dispatch(setPage(page + 1));
    const onClickLast = () => dispatch(setPage(totalPages));

    return (
        <Wrapper>
            <Button disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                First
            </Button>
            <Button disabled={checkIfPreviousIsDisabled()}>
                <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
                Previous</Button>
            <PagerText>Page</PagerText>
            <PageNumberText>{page}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{totalPages}</PageNumberText>
            <Button onClick={onClickNext} disabled={checkIfNextIsDisabled()}>
                Next
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </Button>
            <Link to={`/movies/${page + 1}`} onClick={onClickNext}>NEXT!!</Link>

            <Button onClick={onClickLast} disabled={checkIfNextIsDisabled()}>
                Last
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </Button>
        </Wrapper>
    );
};

export default Pager;
