import styled from "styled-components";

export const Header = styled.header`
    margin: 56px 10% 0px 10%;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.woodsmoke};
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 24px 5% 0px 5%;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.3;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin: 24px 5% 0px 5%;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.3;
    }
`;