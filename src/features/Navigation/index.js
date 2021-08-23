import { Header } from "./Header";
import { Search } from "./Search";
import { StyledNavLink, Item, List } from "./styled"

const Navigation = ({ moviesPath, peoplePath }) => {
    return (
        <>
        <nav>
            <List>
                <Header />
                <Item>
                    <StyledNavLink to={moviesPath}>
                        Movies
                    </StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={peoplePath}>
                        People
                    </StyledNavLink>
                </Item>
                <Search />
            </List>
        </nav>
  
        </>
    );
};

export default Navigation;