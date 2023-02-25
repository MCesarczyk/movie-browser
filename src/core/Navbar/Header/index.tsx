import { Icon, Title, Wrapper } from "./styled";
import camera from "./camera.svg";


export const Header = () => (
    <Wrapper>
        <Icon src={camera} alt="" />
        <Title to="/" >Movies&nbsp;Browser</Title>
    </Wrapper>
);
