import React from "react";
import App from "./App";
import AppThemeProvider from "@/context/theme";
import { createRoot } from "react-dom/client";
const el = document.getElementById("_root-container") as HTMLElement;
const root = createRoot(el);
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
