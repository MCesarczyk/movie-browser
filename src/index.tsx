import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from 'GlobalStyle';

import store from "store";
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
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
