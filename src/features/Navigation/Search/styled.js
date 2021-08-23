import styled from "styled-components";

export const SearchIcon = styled.img`

    margin: 10px 20px;
`;

export const SearchWrapper = styled.div`
border-radius: 33px;
background-color: ${({ theme }) => theme.color.white};
display: flex;

border: 1px solid;

margin-top: 10px;
margin-bottom: 10px;


`;

export const SearchInput = styled.input` 
height: 48px;
width: 432px;
border-radius: 33px;
border: none;
&::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGrey};
}

`;