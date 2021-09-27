import { Header } from "../../../common/Header";
import { Wrapper } from "../../../common/Wrapper";
import { NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";

const NoResultsPage = ({ query }) => (
    <Wrapper>
        <Header>
            {`Sorry, there are no results for "${query}"`}
        </Header>
        {<NoResultsLogo src={noResults} alt="" />}
    </Wrapper>
);

export default NoResultsPage;