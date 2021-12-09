import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { RankingUser } from "../RankingUser";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { endpoints } from "../signIn/api";
import { toast } from "react-toastify";

export const RankingPage = () => {
  const [rankingUsers, setRankingUsers] = useState([]);

  const { fetchData, fetchErrors, loading, data } = useFetch();

  useEffect(() => {
    fetchData(endpoints.ranking);
  }, []);

  useEffect(() => {
    if (data) {
      setRankingUsers(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
    }
  }, [fetchErrors]);

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
  text-align: center;
`;
