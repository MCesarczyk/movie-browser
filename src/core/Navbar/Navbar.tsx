import { SearchForm } from "features/search/SearchForm";
import { Header } from "./Header";
import {
    StyledNavLink,
    Item,
    List,
    NavigationWrapper,
    HeaderWrapper,
    NavigationContainer
} from "./styled"


interface NavbarProps {
    moviesPath: string;
    peoplePath: string;
};

export const Navbar = ({ moviesPath, peoplePath }: NavbarProps) => {
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
