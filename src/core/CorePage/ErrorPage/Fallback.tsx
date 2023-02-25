import { Button, ErrorPageWrapper, Header, Section } from "./styled";
import errorIcon from "./error.svg";


interface FallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
};

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => (
    <ErrorPageWrapper>
        <img src={errorIcon} alt="" />
        <Header>Oooops! Something went&nbsp;wrong...</Header>
        <Section>
            {error.message}
        </Section>
        <Button onClick={resetErrorBoundary}>Reload</Button>
    </ErrorPageWrapper>
);
