import { useState } from "react";
import { generate } from "shortid";
import styled from "styled-components";
import { RankingUser } from "../RankingUser";
import { Wrapper } from "../shareStyleComponents/Wrapper";

const initialRankingUsers = [
  { id: generate(), name: "Francisco Iram Kautzman Díaz", score: "124234234" },
  { id: generate(), name: "Nicole Ordoñez Bañaga", score: "239478" },
  { id: generate(), name: "Víctor Hugo Estrada Ortega", score: "4234" },
  { id: generate(), name: "Fernando Jiménez Aguilar", score: "434" },
  { id: generate(), name: "Luis Fernando López Gutiérre", score: "2" },
];

export const RankingPage = () => {
  const [rankingUsers, setRankingUsers] = useState(initialRankingUsers);

  return (
    <RankingContainer>
      <Title>Ranking</Title>

      <Wrapper>
        {rankingUsers.map(({ id, name, score }, index) => (
          <RankingUser
            key={id}
            position={index + 1}
            name={name}
            score={score}
          />
        ))}
      </Wrapper>
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  flex-grow: 1;
  margin-right: 2rem;
`;
const Title = styled.h2`
  font-size: 3.5rem;
`;
