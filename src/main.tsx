import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import { fsTheme } from '@fs/utils';
import { ModalProvider } from '@fs/core';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={fsTheme}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
