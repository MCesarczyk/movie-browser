import styled from "styled-components";

export const Content = styled.header`
font-weight: 600;
font-size: 36px;
line-height: 1.2;
margin-top: 50px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
    font-size: 26px;
    margin-top: 30px;
  }
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    font-size: 20px;
    margin-top: 20px;
  `;

export const NoResultsLogo = styled.img`
margin: 0 auto;
display: block;
Width: 668px;
Height: 508px;
margin-top: 50px;
`;