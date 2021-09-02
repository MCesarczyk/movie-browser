import styled from "styled-components";

export const SearchWrapper = styled.div`
  border-radius: 33px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-shrink: 1;
  max-height: 48px;
  flex-basis: 432px;
  border: 1px solid;
  margin: 0px;
  width: 100%;
`;

export const SearchIcon = styled.img`
  margin: 10px 20px;
`;

export const SearchInput = styled.input` 
  border-radius: 33px;
  border: none;
  padding: 0;
  height: 48px;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGrey};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    width: 100%;
    height: 44px;
  }
`;

