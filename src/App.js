import { ThemeProvider } from "styled-components";
import "normalize.css";
import { useKeyBoard } from "./hooks/useKeyBoard";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/GlobalStyles";
import { MyRouter } from "./components/MyRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyRouter />
    </ThemeProvider>
  );
}

export default App;
