import { Wrapper, Button, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";

const Pager = () => {
    const pageNumber = 1;
    const lastPageNumber = 500;

    const checkIfPreviousIsDisabled = () => pageNumber === 1 ? true : false;
    const checkIfNextIsDisabled = () => pageNumber === lastPageNumber ? true : false;

    return (
        <Wrapper>
            <Button disabled={checkIfPreviousIsDisabled()}>First</Button>
            <Button disabled={checkIfPreviousIsDisabled()}>Previous</Button>
            <PagerText>Page</PagerText>
            <PageNumberText>{pageNumber}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{lastPageNumber}</PageNumberText>
            <Button disabled={checkIfNextIsDisabled()}>
                Next
                <NextIcon />
            </Button>
            <Button disabled={checkIfNextIsDisabled()}>
                Last
                <NextIcon />
            </Button>
        </Wrapper>
    );
};

export default Pager;