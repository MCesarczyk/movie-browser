import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../../globalSlice";
import { useEffect } from "react";

export const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useSelector(selectQuery);

    const onInputChange = ({ target }) => {
            dispatch(setQuery(target.value));
    };

    useEffect(() => {
        query && query !== null && history.push(`/movies/1?${searchQueryParamName}=${query}`);
    }, [query]);

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