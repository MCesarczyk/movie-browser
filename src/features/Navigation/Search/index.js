import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`/movies/1?${searchParams.toString()}`);
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