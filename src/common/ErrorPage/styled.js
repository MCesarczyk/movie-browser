import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;

export const ErrorIcon = styled.img``;

export const Header = styled.header`
font-size: 36px;
line-height: 120%;
`;

export const Section = styled.p`
font-size: 22px;


  `;

export const ButtonLink = styled.button`
font-size: 14px;
font-weight: bold;
line-height: 19px;
color: ${({ theme }) => theme.color.white};
background: ${({ theme }) => theme.color.blue};
`;