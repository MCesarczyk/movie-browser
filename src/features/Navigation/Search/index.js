import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";

export const Search = () => {

    return (
        <SearchWrapper>
            <SearchIcon src={search} alt="" />
            <SearchInput placeholder="Search for movies..." />
        </SearchWrapper>    
    )
}