import { Header } from "./Header";
import { Search } from "./Search";
import { StyledNavLink, Item, List, Wrapper } from "./styled"

export const Navigation = () => {
    return (
        <>
        <nav>
           <Wrapper>
                <List>
                    <Header />
                        <Item>
                            <StyledNavLink to="/movies">Movies</StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to="/people">People</StyledNavLink>
                        </Item>
                    
                    </List>
                <Search />
            </Wrapper>
        </nav>
  
        </>
    );
};