import styled from "styled-components";
import { ReactComponent as Ellipse } from "./ellipse.svg";

export const Wrapper = styled.div`
    width: 91px;
    height: 91px;
    margin: 120px auto;
    animation:spin 1s linear infinite;
    @keyframes spin { 100% {transform:rotate(360deg);} };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 66px;
        height: 66px;
        margin: 66px auto;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 35px;
        height: 35px;
        margin: 24px auto;
    }
`;

export const LoadingIcon = styled(Ellipse)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 66px;
        height: 66px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 35px;
        height: 35px;
    }
`;