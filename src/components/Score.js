import styled from "styled-components";
import { BubbleScore } from "./BubbleScore";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Score = ({ results }) => {
  let successfulPercentage = Math.trunc(
    (results.succeed * 100) / (results.succeed + results.failed)
  );

  return (
    <ScoreContainer flex flex_jc_c>
      <BubbleScore percentage={successfulPercentage} />
      {/* <PrimaryButton>Volver al inicio</PrimaryButton> */}
    </ScoreContainer>
  );
};

const ScoreContainer = styled(Wrapper)`
  margin: 1rem;
`;
