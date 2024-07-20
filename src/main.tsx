import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { fsTheme } from "@fs/utils";
import { ModalProvider } from "@fs/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={fsTheme}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
