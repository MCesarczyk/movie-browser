import { Header } from "./Header";
import { Search } from "./Search";
import { StyledNavLink, Item, List, Wrapper, NavigationWrapper } from "./styled"

export const Navigation = () => {
    return (
        <>
        <NavigationWrapper>
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
        </NavigationWrapper>
  
        </>
    );
};