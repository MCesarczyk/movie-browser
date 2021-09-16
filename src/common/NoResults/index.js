import Wrapper from "../Wrapper";
import { NoResultsLogo } from "./styled";
import { Header } from "../Header";
import noResults from "./noResults.svg";

export const NoResults = () => {
    return (
        <Wrapper>
            <Header>
                Sorry, the page not found...
            </Header>
            <NoResultsLogo src={noResults} alt="" />
        </Wrapper>
    );
};