import styled from 'styled-components'
import { Logo } from '../components/NavBar/Logo'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { FingerLoader } from './loaders/FingerLoader'

export const LazyLoading = () => {
  return (
    <LazyLoadingStyled fd_c jc_c ai_c>
      <FingerLoader />
      <Logo/>
    </LazyLoadingStyled>
  )
}

const LazyLoadingStyled = styled(FlexContainer)`
  position: absolute;
  z-index: 2000;
  background: ${({ theme: { bgColor } }) => bgColor};

  width: 100%;
  height: 100vh;

  img {
    width: 7rem;
    cursor: none;
    pointer-events: none;
  }
`
