import { Content, NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";
import Wrapper from "../../../../common/Wrapper";

export const NoResults = () => {
    return (
    <Wrapper>
        <Content>
            Sorry, there are no results for "Muan"
        </Content>
            <NoResultsLogo src={noResults} alt="" />
    </Wrapper>
    );
};