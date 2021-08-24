import { Wrapper, Button, PagerText, PageNumberText } from "./styled";

const Pager = () => (
    <Wrapper>
        <Button>First</Button>
        <Button>Previous</Button>
        <PagerText>Page</PagerText>
        <PageNumberText>1</PageNumberText>
        <PagerText>of</PagerText>
        <PageNumberText>500</PageNumberText>
        <Button>Next</Button>
        <Button>Last</Button>
    </Wrapper>
);

export default Pager;