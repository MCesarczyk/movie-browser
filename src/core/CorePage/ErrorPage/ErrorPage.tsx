import { ButtonLink, ErrorIcon, ErrorPageWrapper, Header, Section } from "./styled";
import errorIcon from "./error.svg";


interface ErrorPageProps {
    error?: Error;
};

export const ErrorPage = ({ error }: ErrorPageProps) => (
    <ErrorPageWrapper>
        <ErrorIcon src={errorIcon} alt="" />
        <Header>Oooops! Something went&nbsp;wrong...</Header>
        <Section>
            Please, check your network connection <br />
            and try again
            {error?.message}
        </Section>
        <ButtonLink to="/">Back to Home page</ButtonLink>
    </ErrorPageWrapper>
);
