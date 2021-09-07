import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color:${({ theme }) => theme.color.whisper};
    min-width: ${({ theme }) => theme.breakpoint.mobileMin};
  }
    
  *, ::after, ::before {
    box-sizing: inherit;
  }
`;