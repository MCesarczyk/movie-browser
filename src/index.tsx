import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from 'GlobalStyle';

import { theme } from 'theme';
import reportWebVitals from 'reportWebVitals';
import { ImagesConfigProvider } from 'services/ImagesConfigContext';
import { App } from 'App';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5_000,
      keepPreviousData: true,
    }
  }
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ImagesConfigProvider>
          <ReactQueryDevtools />
          <ThemeProvider theme={theme}>
            <Normalize />
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </ImagesConfigProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
