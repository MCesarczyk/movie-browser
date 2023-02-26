import styled from "styled-components";

export const SearchWrapper = styled.div`
  border-radius: 33px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  flex-shrink: 1;
  height: 48px;
  border: 1px solid;
  margin: 0px;
  width: 100%;
  max-width: 432px;

  @media (max-width: ${({theme})=>theme.breakpoint.mediumScreen}) {
    max-width: none;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 20px;
`;

export const SearchInput = styled.input` 
  border-radius: 33px;
  padding-left: 20px;
  border: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGrey};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.stormGrey};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    width: 100%;
    height: 44px;
  }
`;
