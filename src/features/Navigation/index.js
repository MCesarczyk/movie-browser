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
                    <Header />
                    <List>
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
                    </List>
                </HeaderWrapper>
                <Search />
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;