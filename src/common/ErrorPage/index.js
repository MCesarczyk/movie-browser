import { ErrorIcon, ErrorPageWrapper } from "./styled";
import error from "./error.svg";

const ErrorPage = () => (
    <ErrorPageWrapper>
        <ErrorIcon src={error} alt=""/>
        Error page
    </ErrorPageWrapper>
);

export default ErrorPage;