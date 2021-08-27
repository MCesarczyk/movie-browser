import { Content, NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";

export const NoResults = () => {
    return (
        <>
    <Content>
        Sorry, there are no results for "Muan"
    </Content>
    <NoResultsLogo src={noResults} alt="" />
</>
    );
};