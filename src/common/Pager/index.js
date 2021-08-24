import { Wrapper, Button } from "./styled";

const Pager = () => (
    <Wrapper>
        <Button>First</Button>
        <Button>Previous</Button>
        Page 1 of 500
        <Button>Next</Button>
        <Button>Last</Button>
    </Wrapper>
);

export default Pager;