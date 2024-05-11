import { ThemeProvider } from "styled-components";
import { AppProvider } from "./context";
import Router from "./router";
import theme from "./theme";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Router />
        </AppProvider>
      </ThemeProvider>
  );
}
