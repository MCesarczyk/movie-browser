import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    margin: 40px auto;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    margin: 0px 12px;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.mineShaft};

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        color: ${({ theme }) => theme.color.woodsmoke};
    }
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

// export const Header = styled.header`
//     font-weight: 600;
//     font-size: 36px;
//     line-height: 1.2;
//     color: ${({ theme }) => theme.color.woodsmoke};
// `;