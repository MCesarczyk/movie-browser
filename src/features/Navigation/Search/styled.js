import styled from "styled-components";

export const SearchIcon = styled.img`
  margin: 10px 20px;
`;

export const SearchWrapper = styled.div`
  border-radius: 33px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  max-height: 48px;
  max-width: 432px;
  border: 1px solid;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input` 
  max-width: 90vw;
  width: 432px;
  border-radius: 33px;
  border: none;
  padding: 0;
  padding-left: 64px;
  height: 48px;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGrey};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    width: 432px;
    height: 44px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 12px;
    width: 288px;
    height: 44px;
  }
`;

