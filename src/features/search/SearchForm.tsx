import { useLocation, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";

import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import { SEARCH_QUERY_PARAM_NAME } from "./constants";
import search from "./search.svg";


export const SearchForm = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams: URLSearchParams = new URLSearchParams(location.search);
    const query: string | null = searchParams.get(SEARCH_QUERY_PARAM_NAME);

    const moviesMatch = useRouteMatch("/movies");
    const movieMatch = useRouteMatch("/movie");
    const peopleMatch = useRouteMatch("/people");
    const personMatch = useRouteMatch("/person");
    const property: string | null = ((moviesMatch || movieMatch) && "/movies") || ((peopleMatch || personMatch) && "/people");

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        if (target.value.trim() === "") {
            searchParams.delete(SEARCH_QUERY_PARAM_NAME);
        } else {
            searchParams.set(SEARCH_QUERY_PARAM_NAME, target.value);
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
