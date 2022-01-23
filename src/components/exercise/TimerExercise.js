import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { secondsToMinutes } from "../../helpers/converterTimeHelper";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const TimerExercise = ({ time }) => {
  if (time === 0) return null;
  return (
    <TimeExerciseWrapper>
      {time ? secondsToMinutes(time) : <Skeleton />}
    </TimeExerciseWrapper>
  );
};

const TimeExerciseWrapper = styled(Wrapper)`
  width: 50%;
  padding: 1rem;
  height: 1rem;

  text-align: center;
  color: ${({ theme: { secondaryColor } }) => secondaryColor};

  font-size: 2rem;
  font-weight: 800;

  margin: 1rem 0;
`;
