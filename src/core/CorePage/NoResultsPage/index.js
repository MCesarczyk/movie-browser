import { Header } from "../../../common/Header";
import { Wrapper } from "../../../common/Wrapper";
import { NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";

const NoResultsPage = ({ query }) => (
    <Wrapper>
        <Header>
            {query ? 
            `Sorry, there are no results for "${query}"` :
            "Sorry, the page not found..."
            }
        </Header>
        {<NoResultsLogo src={noResults} alt="" />}
    </Wrapper>
);

export default NoResultsPage;