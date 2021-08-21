import { Icon, Title, Wrapper } from "./styled";
import camera from "../images/camera.svg";


export const Header = () => {

    return (
        <Wrapper>
            <Icon src={camera} alt="" />&nbsp;
            <Title>Movies Browser</Title>
        </Wrapper>  
    )
}