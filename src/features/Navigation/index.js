import { Header } from "./Header";
import { StyledNavLink, Item, List } from "./styled"

const Navigation = ({ moviesPath, peoplePath }) => {
    return (
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
            </List>
        </nav>
    );
};

export default Navigation;