import styled from "styled-components";
import { secondsToMinutes } from "../helpers/converterTimeHelper";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const TimerExercise = ({ time }) => {
  const timeFormated = secondsToMinutes(time);
  return <TimeExerciseWrapper>{timeFormated}</TimeExerciseWrapper>;
};

const TimeExerciseWrapper = styled(Wrapper)`
  width: min-content;
  color: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 1rem;
  font-size: 2rem;
  font-weight: 800;
`;
