import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { generate } from "shortid";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { RankingUser } from "../RankingUser";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { endpoints } from "../signIn/api";

const initialRankingUsers = [
  { id: generate(), name: "Francisco Iram Kautzman Díaz", score: "124234234" },
  { id: generate(), name: "Nicole Ordoñez Bañaga", score: "239478" },
  { id: generate(), name: "Víctor Hugo Estrada Ortega", score: "4234" },
  { id: generate(), name: "Fernando Jiménez Aguilar", score: "434" },
  { id: generate(), name: "Luis Fernando López Gutiérre", score: "2" },
];

export const RankingPage = () => {
  const [rankingUsers, setRankingUsers] = useState([]);

  const { fetchData, fetchErrors, loading, data } = useFetch();

  useEffect(() => {
    fetchData(endpoints.ranking);
  }, []);

  useEffect(() => {
    if (data) {
      setRankingUsers(data.data);
      console.log(data.data);
    }
  }, [data]);

  return (
    <RankingContainer>
      <Title>Ranking</Title>

      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          {rankingUsers.map(({ id, name, lastName, totalScore }, index) => (
            <RankingUser
              key={id}
              position={index + 1}
              name={`${name} ${lastName}`}
              score={totalScore}
            />
          ))}
        </Wrapper>
      )}
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
