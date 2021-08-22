import { Header } from "./Header";
import { Search } from "./Search";
import { StyledNavLink, Item, List, NavigationWrapper, HeaderWrapper } from "./styled"

export const Navigation = () => {
    return (
        <>
        <NavigationWrapper>
           <HeaderWrapper>
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
            </HeaderWrapper>
        </NavigationWrapper>
  
        </>
    );
};