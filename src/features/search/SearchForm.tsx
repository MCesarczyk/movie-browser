import { useLocation, useNavigate } from "react-router";

import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import { SEARCH_QUERY_PARAM_NAME } from "./constants";
import search from "./search.svg";


export const SearchForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const searchParams: URLSearchParams = new URLSearchParams(location.search);
    const query: string | null = searchParams.get(SEARCH_QUERY_PARAM_NAME);

    const moviesMatch = pathname.includes("/movies");
    const movieMatch = pathname.includes("/movie");
    const peopleMatch = pathname.includes("/people");
    const personMatch = pathname.includes("/person");

    const getProperty = (): string | null => {
        if (moviesMatch || movieMatch) {
            return "/movies";
        }

        if (peopleMatch || personMatch) {
            return "/people";
        }

        return null;
    };

    const property = getProperty();

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        if (target.value.trim() === "") {
            searchParams.delete(SEARCH_QUERY_PARAM_NAME);
        } else {
            searchParams.set(SEARCH_QUERY_PARAM_NAME, target.value);
        }
        const newSearchParams = searchParams.toString();

        navigate(`${property}/1?${newSearchParams}`);
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
