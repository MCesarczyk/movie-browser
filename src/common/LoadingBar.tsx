import styled from "styled-components";


export const LoadingBar = () => (
  <LoadingBarBody>
    <LoadingBarSlider />
  </LoadingBarBody>
);

export const LoadingBarBody = styled.div`
  background-color: ${({theme})=>theme.color.black};
  height: 8px;
  display: flex;
  z-index: 2000;
  margin-top: -8px;
`;

export const LoadingBarSlider = styled.div`
  background-color: ${({theme})=>theme.color.scienceBlue};
  height: 100%;
  width: 120px;
  animation: slide 1s linear infinite;

  @keyframes slide {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: calc(100% - 120px);
    }
  }
`;
