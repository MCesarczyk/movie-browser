import { Wrapper, Button, PagerText, PageNumberText } from "./styled";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

const Pager = () => {
    const pageNumber = 1;
    const lastPageNumber = 500;

    const checkIfPreviousIsDisabled = () => pageNumber === 1 ? true : false;
    const checkIfNextIsDisabled = () => pageNumber === lastPageNumber ? true : false;

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
            <PageNumberText>{pageNumber}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{lastPageNumber}</PageNumberText>
            <Button disabled={checkIfNextIsDisabled()}>
                Next
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </Button>
            <Button disabled={checkIfNextIsDisabled()}>
                Last
                <NextIcon disabled={checkIfNextIsDisabled()} />
            </Button>
        </Wrapper>
    );
};

export default Pager;