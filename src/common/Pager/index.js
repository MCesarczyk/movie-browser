import { Wrapper, Button, PagerText, PageNumberText } from "./styled";

const Pager = () => {
    const pageNumber = 1;
    const lastPageNumber = 500;

    return (
        <Wrapper>
            <Button disabled={pageNumber === 1 ? true : false}>First</Button>
            <Button disabled={pageNumber === 1 ? true : false}>Previous</Button>
            <PagerText>Page</PagerText>
            <PageNumberText>{pageNumber}</PageNumberText>
            <PagerText>of</PagerText>
            <PageNumberText>{lastPageNumber}</PageNumberText>
            <Button disabled={pageNumber === lastPageNumber ? true : false}>Next</Button>
            <Button disabled={pageNumber === lastPageNumber ? true : false}>Last</Button>
        </Wrapper>
    );
};

export default Pager;