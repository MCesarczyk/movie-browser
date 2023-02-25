import { useLocation, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";

import searchQueryParamName from "features/search/searchQueryParamName";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "./search.svg";


const SearchForm = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams: URLSearchParams = new URLSearchParams(location.search);
    const query: string | null = searchParams.get(searchQueryParamName);

    const moviesMatch = useRouteMatch("/movies");
    const movieMatch = useRouteMatch("/movie");
    const peopleMatch = useRouteMatch("/people");
    const personMatch = useRouteMatch("/person");
    const property: string | null = ((moviesMatch || movieMatch) && "/movies") || ((peopleMatch || personMatch) && "/people");

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        const newSearchParams = searchParams.toString();

        history.push(`${property}/1?${newSearchParams}`);
    };

    return (
        <SearchWrapper>
            <SearchIcon src={search} alt="" />
            <SearchInput placeholder={(moviesMatch || movieMatch) ? "Search for movies..." : "Search for people..."}
                value={query || ""
                }
                onChange={onInputChange}
            />
        </SearchWrapper>
    )
};

export default SearchForm;
