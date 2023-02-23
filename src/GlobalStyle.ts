import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color:${({ theme }) => theme.color.whisper};
    min-width: ${({ theme }) => theme.breakpoint.mobileMin};
    overflow-wrap: break-word;
    overflow-y: scroll;
    width: 100%;
  }
    
  *, ::after, ::before {
    box-sizing: inherit;
  }
`;