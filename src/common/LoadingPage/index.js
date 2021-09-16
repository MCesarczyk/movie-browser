import Wrapper from "../Wrapper";
import { Header } from "../Header";
import LoadingCircle from "./LoadingCircle";

const LoadingPage = ({ message }) => {
    return (
        <Wrapper>
            <Header>{message}</Header>
            <LoadingCircle />
        </Wrapper>
    );
};

export default LoadingPage;
