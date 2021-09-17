import { Header } from "../../../common/Header";
import LoadingCircle from "../../../common/LoadingCircle";

const LoadingPage = ({ message, query }) => (
    <>
        <Header>
            {query ? `Search results for "${query}"` : message}
        </Header>
        <LoadingCircle />
    </>
);

export default LoadingPage;