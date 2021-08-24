import { ButtonLink, ErrorIcon, ErrorPageWrapper, Header, Section } from "./styled";
import error from "./error.svg";

const ErrorPage = () => (
    <ErrorPageWrapper>
        <ErrorIcon src={error} alt=""/>
            <Header>Oooops! Something went&nbsp;wrong...</Header>
                <Section>
                Please, check your network connection <br />
                and try again
                </Section>
                <ButtonLink>Back to Home page</ButtonLink>
    </ErrorPageWrapper>
);

export default ErrorPage;