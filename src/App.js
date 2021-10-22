import styled, { ThemeProvider } from "styled-components";
import "normalize.css";
import { useKeyBoard } from "./hooks/useKeyBoard";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/GlobalStyles";
import { MyRouter } from "./components/MyRouter";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppStyled>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MyRouter />
        </ThemeProvider>
      </AppStyled>
    </AuthProvider>
  );
}

export default App;

const AppStyled = styled.div`
  max-width: 1920px;
`;
