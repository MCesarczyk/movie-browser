import { Header } from "common/Header";
import { Wrapper } from "common/Wrapper";
import LoadingCircle from "common/LoadingCircle";


interface LoadingPageProps {
    message: string;
    query: string | null | undefined;
};

const LoadingPage = ({ message, query }: LoadingPageProps) => (
    <Wrapper>
        <Header>
            {query ? `Search results for "${query}"` : message}
        </Header>
        <LoadingCircle />
    </Wrapper>
);

export default LoadingPage;
