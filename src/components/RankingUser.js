import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const RankingUser = ({ position, name, score }) => {
  return (
    <RankingUserContainer flex gap="1rem">
      <Position>{position}</Position>
      <Wrapper flex flex_dc flex_jc_c gap="0.5rem">
        <Name>{name}</Name>
        <Score>{score}</Score>
      </Wrapper>
    </RankingUserContainer>
  );
};

const RankingUserContainer = styled(Wrapper)`
  width: 100%;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  padding: 1rem;

  margin: 1rem 0;

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
`;
