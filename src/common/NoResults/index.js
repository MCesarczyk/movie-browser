import { Content, NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";
import Wrapper from "../Wrapper";

export const NoResults = () => {
    return (
    <Wrapper>
        <Content>
            Sorry, the page not found...
        </Content>
            <NoResultsLogo src={noResults} alt="" />
    </Wrapper>
    );
};