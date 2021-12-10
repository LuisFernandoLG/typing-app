import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const RankingUser = ({ position, name, score, children }) => {
  return (
    <RankingUserContainer flex gap="1rem">
      <Sticker>{children}</Sticker>

      <Position>{position}</Position>
      <Wrapper flex flex_dc flex_jc_c gap="0.5rem">
        <Name>{name}</Name>
        <Score>
          Puntaje: <span>{score}</span>
        </Score>
      </Wrapper>
    </RankingUserContainer>
  );
};

const Sticker = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
`;

const RankingUserContainer = styled(Wrapper)`
  position: relative;
  width: 90%;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  padding: 1rem;

  margin: 1rem auto;

  border-radius: 1rem;
`;

const Position = styled.div`
  font-size: 4rem;
  font-weight: 700;
`;
const Name = styled.p`
  font-size: 1.5rem;
`;
const Score = styled.span`
  font-size: 1rem;

  span {
    font-weight: 800;
  }
`;
