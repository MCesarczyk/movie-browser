import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import searchQueryParamName from "./searchQueryParamName";
import { selectQuery, setQuery } from "../../../globalSlice";
import { useState } from "react";

export const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useSelector(selectQuery);

    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const property = moviesMatch && moviesMatch.path || peopleMatch && peopleMatch.path;
    
    const onInputChange = ({ target }) => {
        dispatch(setQuery(target.value));
    };

    useEffect(() => {
        query && query !== null && history.push(`${property}/1?${searchQueryParamName}=${query}`);
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