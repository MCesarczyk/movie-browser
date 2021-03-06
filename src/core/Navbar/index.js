import { Header } from "./Header";
import SearchForm from "../../features/search/SearchForm";
import {
    StyledNavLink,
    Item,
    List,
    NavigationWrapper,
    HeaderWrapper,
    NavigationContainer
} from "./styled"

const Navbar = ({ moviesPath, peoplePath }) => {
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
                <SearchForm />
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navbar;