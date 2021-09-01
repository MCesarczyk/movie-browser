import Wrapper from "../Wrapper";
import LoadingCircle from "./LoadingCircle";
import { Header } from "./styled";

const LoadingPage = ({ message }) => {
    return (
        <Wrapper>
            <Header>{message}</Header>
            <LoadingCircle />
        </Wrapper>
    );
};

export default LoadingPage;
