import { Header } from "./Header";
import { StyledNavLink, Item, List } from "./styled"

export const Navigation = () => {
    return (
        <nav>
         
            <List>
            <Header />
                <Item>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/people">People</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};