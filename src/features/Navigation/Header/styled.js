import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 8px;
    }
`;

export const Icon = styled.img`
    width: 34px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        width: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;
    flex-wrap: nowrap; 
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        line-height: 16px;
    }
`;
