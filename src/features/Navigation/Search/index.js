import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import { useLocation } from "react-router-dom";

export const Search = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");
    return (
        <SearchWrapper>
            <SearchIcon src={search} alt="" />
            <SearchInput placeholder="Search for movies..." />
        </SearchWrapper>    
    )
}