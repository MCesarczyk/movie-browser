import { useLocation, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import searchQueryParamName from "./searchQueryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const moviesMatch = useRouteMatch("/movies");
    const movieMatch = useRouteMatch("/movie");
    const peopleMatch = useRouteMatch("/people");
    const personMatch = useRouteMatch("/person");
    const property = ((moviesMatch || movieMatch) && "/movies") || ((peopleMatch || personMatch) && "/people");

    const onInputChange = ({ target }) => {
        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        const newSearchParams = searchParams.toString();
        history.push(`${property}/1?${newSearchParams.toString()}`);
    };

    return (
        <SearchWrapper>
            <SearchIcon src={search} alt="" />
            <SearchInput placeholder={moviesMatch ? "Search for movies..." : "Search for people..."}
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchWrapper>
    )
}