import styled from "styled-components";
import LogoImg from "../images/keyboard.png";
import { FlexContainer } from "../components/shareStyleComponents/FlexContainer";
import { Loader } from "./Loader";

export const LazyLoading = () => {
  return (
    <LazyLoadingStyled flex_dc flex_jc_c flex_ai_c>
      <img src={LogoImg} alt="logo" />
      <Loader />
    </LazyLoadingStyled>
  );
};

const LazyLoadingStyled = styled(FlexContainer)`
  position: absolute;
  z-index: 1000;
  background: ${({ theme: { primaryColor } }) => primaryColor};

  width: 100%;
  height: 100vh;

  img {
    width: 7rem;
    weight: 7rem;
    cursor: none;
    pointer-events: none;
  }
`;
