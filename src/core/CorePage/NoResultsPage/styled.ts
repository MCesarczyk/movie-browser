import styled from "styled-components";


export const NoResultsLogo = styled.img`
    margin: 0 auto;
    display: block;
    Width: 668px;
    Height: 508px;
    margin-top: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        Width: 150px;
        Height: 105px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        Width: 270px;
        Height: 205px;
    }
`;
