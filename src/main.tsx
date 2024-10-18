import { CacheProvider } from '@emotion/react';
import { AlertProvider, ModalProvider } from '@fs/core';
import { cacheRtl, queryClient, FsThemeContextProvider } from '@fs/utils';
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
      <FsThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </AlertProvider>
        </QueryClientProvider>
      </FsThemeContextProvider>
    </CacheProvider>
  </StrictMode>
);
