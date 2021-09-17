import { Header } from "../../../common/Header";
import { NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";

const NoResultsPage = () => (
    <>
        <Header>
            {"Sorry, the page not found..."}
        </Header>
        {<NoResultsLogo src={noResults} alt="" />}
    </>
);

export default NoResultsPage;