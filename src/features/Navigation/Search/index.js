import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "../images/search.svg";
import { useLocation } from "react-router-dom";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
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