import "@fontsource/inter";
import "./App.css";
import { CssVarsProvider } from "@mui/joy";
import theme from "./styles/joy-theme.ts";
import MainUI from "./features/MainUI.tsx";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <ConfirmProvider>
      <CssVarsProvider theme={theme} defaultMode="light">
        <MainUI />
      </CssVarsProvider>
    </ConfirmProvider>
  );
}

export default App;
