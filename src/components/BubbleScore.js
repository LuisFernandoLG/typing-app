import styled, { keyframes } from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const BubbleScore = ({ percentage }) => {
  return (
    <BubbleScoreContainer flex flex_jc_c flex_ai_c>
      <Percentage>{percentage}%</Percentage>

      <Wave1 percentage={percentage} viewBox="0 0 500 500" width="100%">
        <path d="M409.5,336Q350,422,250,423Q150,424,122,337Q94,250,116.5,154Q139,58,242,72Q345,86,407,168Q469,250,409.5,336Z"></path>
      </Wave1>

      <Wave2 percentage={percentage} viewBox="0 0 500 500" width="100%">
        <path d="M409.5,336Q350,422,250,423Q150,424,122,337Q94,250,116.5,154Q139,58,242,72Q345,86,407,168Q469,250,409.5,336Z"></path>
      </Wave2>
    </BubbleScoreContainer>
  );
};

const waveAnimation = keyframes`
 0% {

    transform: rotate(0deg);
  }

  100% {
    transform: rotate(720deg) scale(1.7);
  } 
`;

const drop = (percentage) => keyframes`
 0% {}
    100% {
    /* 100% - percetage */
    bottom: -${100 - percentage}%;
    /* bottom: -${100 - 50}%; */
    }
`;

const Percentage = styled.p`
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
  font-weight: 600;
  z-index: 100;
  font-size: 2.5em;
`;

const BubbleScoreContainer = styled(Wrapper)`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;

  background: ${({ theme: { bgColor } }) => bgColor};
  position: relative;
  overflow: hidden;

  box-shadow: 0 0 0.5rem ${({ theme: { primaryColor } }) => primaryColor};
`;

const Wave = styled.svg`
  position: absolute;
  bottom: -100%;

  width: 100%;
  height: 100%;
`;

const Wave1 = styled(Wave)`
  path {
    fill: ${({ theme: { primaryColor } }) => primaryColor};
  }

  animation: ${({ percentage }) => drop(percentage)} 1s ease forwards,
    ${waveAnimation} 2s ease forwards;
`;

const Wave2 = styled(Wave)`
  opacity: 0.8;
  path {
    fill: ${({ theme: { primaryColor } }) => primaryColor};
  }

  animation: ${({ percentage }) => drop(percentage)} 1s ease forwards,
    ease forwards, ${waveAnimation} 2s ease forwards 200ms;
`;
