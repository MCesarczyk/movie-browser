import { Header } from "./Header";
import { Search } from "./Search";
import {
    StyledNavLink,
    Item,
    List,
    NavigationWrapper,
    HeaderWrapper,
    NavigationContainer
} from "./styled"

const Navigation = ({ moviesPath, peoplePath }) => {
    return (
        <NavigationContainer>
            <NavigationWrapper>
                <HeaderWrapper>
                    <List>
                        <Header />
                        <Item>
                            <StyledNavLink to="/movies">
                                Movies
                            </StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to="/people">
                                People
                            </StyledNavLink>
                        </Item>
                    </List>
                    <Search />
                </HeaderWrapper>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;