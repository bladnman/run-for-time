import "@fontsource/inter";
import "./App.css";
import { CssVarsProvider } from "@mui/joy";
import theme from "./styles/joy-theme.ts";
import MainUI from "./features/MainUI.tsx";

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      <MainUI />
    </CssVarsProvider>
  );
}

export default App;
