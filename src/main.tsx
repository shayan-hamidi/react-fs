import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { AlertProvider, ModalProvider } from '@fs/core';
import { queryClient, FsThemeContextProvider } from '@fs/utils';
import { QueryClientProvider } from 'react-query';
import App from './App';
import './index.css';
import { initializeSentry } from './sentrySetup';
import './i18nConfig';

initializeSentry();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FsThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <AlertProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AlertProvider>
      </QueryClientProvider>
    </FsThemeContextProvider>
  </StrictMode>
);
