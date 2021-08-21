import { Icon, Title } from "./styled";
import camera from "./images/camera.svg";

export const Header = () => {

    return (
        <>
            <Icon src={camera} alt="" />
            <Title>Movies Browser</Title>
        </>
         
           
    )
}