import { Header } from "../../../common/Header";
import { Wrapper } from "../../../common/Wrapper";
import LoadingCircle from "../../../common/LoadingCircle";

const LoadingPage = ({ message, query }) => (
    <Wrapper>
        <Header>
            {query ? `Search results for "${query}"` : message}
        </Header>
        <LoadingCircle />
    </Wrapper>
);

export default LoadingPage;