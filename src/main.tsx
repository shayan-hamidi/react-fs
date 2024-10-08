import { CacheProvider } from '@emotion/react';
import { AlertProvider, ModalProvider } from '@fs/core';
import { cacheRtl, fsTheme, queryClient } from '@fs/utils';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './App.tsx';
import './index.css';
import { initializeSentry } from './sentrySetup.ts';

initializeSentry();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={fsTheme}>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </AlertProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
