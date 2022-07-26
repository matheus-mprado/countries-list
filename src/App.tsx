/* eslint-disable */

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CountryProvider } from "./hooks/useCountry";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CountryProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CountryProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
