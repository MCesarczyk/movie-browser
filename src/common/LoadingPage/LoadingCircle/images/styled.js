import styled from "styled-components";

export const Wrapper = styled.div`
    width: 91px;
    height: 91px;
    margin: 120px auto;
    animation:spin 1s linear infinite;
    @keyframes spin { 100% {transform:rotate(360deg);} };
`;