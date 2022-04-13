import styled from 'styled-components'
import { Loader } from './Loader'
// import { Logo } from '../components/NavBar/Logo'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { FingerLoader } from './loaders/FingerLoader'

export const LazyLoading = () => {
  return (
    <LazyLoadingStyled flex_dc flex_jc_c flex_ai_c>
      <FingerLoader />
      <Loader />
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
