import styled, { css } from "styled-components";
import { ReactComponent as Next } from "./next.svg";


export const Icon = styled(Next) <{ disabled: boolean }>`
    margin-left: 8px;
    color: ${({ theme }) => theme.color.scienceBlue};

    ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.color.darkGrey};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 0px 2px;
        width: 5px;
        height: 8px;
    }    
`;
