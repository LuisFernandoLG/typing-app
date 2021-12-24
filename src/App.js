import styled, { ThemeProvider } from "styled-components";
import "normalize.css";
import "react-toastify/dist/ReactToastify.min.css";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/GlobalStyles";
import { MyRouter } from "./components/MyRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
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
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
