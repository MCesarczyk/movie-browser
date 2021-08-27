import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color:${({ theme }) => theme.color.whisper};
  }
    
  *, ::after, ::before {
    box-sizing: inherit;
  }
`;