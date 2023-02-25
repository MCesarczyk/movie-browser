import styled, { css } from "styled-components";
import { ReactComponent as Previous } from "./prev.svg";


export const Icon = styled(Previous) <{ disabled: boolean }>`
    margin-right: 8px;
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