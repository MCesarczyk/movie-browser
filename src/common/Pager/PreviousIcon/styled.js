import styled, { css } from "styled-components";
import { ReactComponent as Previous } from "./images/prev.svg";

export const Icon = styled(Previous)`
    margin-right: 8px;
    color: ${({ theme }) => theme.color.scienceBlue};

    ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.color.darkGrey};
    `}
`;