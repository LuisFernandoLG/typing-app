import { useHistory } from "react-router";
import styled from "styled-components";
import { routes } from "../../routes";
import { BubbleScore } from "./BubbleScore";
import { FaUndo } from "react-icons/fa";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const Score = ({ results, pointsCalculated }) => {
  let history = useHistory();

  let pointsInt = parseInt(pointsCalculated);

  let successfulPercentage = Math.trunc(
    (results.succeed * 100) / (results.succeed + results.failed)
  );

  const goToHome = () => {
    history.push(routes.HOME_PAGE);
  };

  const reloadPage = () => {
    history.go(0);
  };

  return (
    <ScoreContainer flex flex_jc_c flex_dc flex_ai_c gap="1rem">
      <BubbleScore percentage={successfulPercentage} />
      <Points>{pointsInt} Puntos</Points>
      <BackBtn onClick={goToHome}>Volver al inicio</BackBtn>
      <ReloadBtn onClick={reloadPage}>
        <FaUndo />
      </ReloadBtn>
    </ScoreContainer>
  );
};

const ScoreContainer = styled(Wrapper)`
  margin: 1rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 2rem;
  border-radius: 1rem;
`;

const BackBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem;

  border-radius: 1rem;
`;

const ReloadBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem;

  border-radius: 1rem;
`;

const Points = styled.p`
  text-align: center;
  font-weight: 800;
`;
