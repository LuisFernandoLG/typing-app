import styled, { ThemeProvider } from 'styled-components'
import 'normalize.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { GlobalStyles } from './style/GlobalStyles'
import { MyRouter } from './components/MyRouter'
import { AuthProvider } from './contexts/AuthContext'
import { useTheme } from './hooks/useTheme'
import { ToastStyled } from './components/toasts/ToastStyled'

function App () {
  const { currentTheme } = useTheme()

  return (
    <AuthProvider>
      <AppStyled>
        <ThemeProvider theme={currentTheme}>
          <ToastStyled/>
          <GlobalStyles />
          <MyRouter />
        </ThemeProvider>
      </AppStyled>
    </AuthProvider>
  )
}

export default App

const AppStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
