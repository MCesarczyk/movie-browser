import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
        };
    return (
        <SearchWrapper>
            <SearchIcon src={search} alt="" />
            <SearchInput placeholder="Search for movies..." 
            value={query || ""}
            onChange={onInputChange}
            />
        </SearchWrapper>    
    )
}