import Wrapper from "../../common/Wrapper";
import LoadingCircle from "./LoadingCircle";
import { Header } from "./styled";

const LoadingPage = () => {

    return (
        <Wrapper>
            <Header>Search results for “Mulan”</Header>
            <LoadingCircle />
        </Wrapper>
    );
};

export default LoadingPage;