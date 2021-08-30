import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 640px;
    margin: 40px auto;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    margin: 0px 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.mineShaft};

    ${({ disabled }) => disabled && css`
        background-color: ${({ theme }) => theme.color.mystic};
        color: ${({ theme }) => theme.color.woodsmoke};
        cursor: default;
    `}
`;

export const PagerText = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkGrey};
    margin: 0px 8px;
`;

export const PageNumberText = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin: 0px 8px;
`;