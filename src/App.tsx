import "@fontsource/inter";
import "./App.css";
import { CssVarsProvider } from "@mui/joy";
import theme from "./styles/joy-theme.ts";
import MainBody from "./features/MainBody.tsx";

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <MainBody />
    </CssVarsProvider>
  );
}

export default App;
