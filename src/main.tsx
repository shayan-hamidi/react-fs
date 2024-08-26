import { ModalProvider } from '@fs/core';
import { fsTheme, queryClient } from '@fs/utils';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './App.tsx';
import './index.css';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={fsTheme}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
