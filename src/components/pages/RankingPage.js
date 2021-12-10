import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { RankingUser } from "../RankingUser";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { endpoints } from "../signIn/api";
import { toast } from "react-toastify";
import { FaTrophy } from "react-icons/fa";

const Throphy1 = () => {
  const style = { color: "#FFD06C", fontSize: "2.5rem" };
  return <FaTrophy style={style} />;
};

const Throphy2 = () => {
  const style = { color: "#808080", fontSize: "2.5rem" };
  return <FaTrophy style={style} />;
};

const Throphy3 = () => {
  const style = { color: "#DC8C44", fontSize: "2.5rem" };
  return <FaTrophy style={style} />;
};

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
            >
              {index === 0 ? <Throphy1 /> : null}
              {index === 1 ? <Throphy2 /> : null}
              {index === 2 ? <Throphy3 /> : null}
            </RankingUser>
          ))}
        </Wrapper>
      )}
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  flex-grow: 1;
  margin-right: 2rem;
  min-height: 100vh;

  .first {
    color: green;
  }

  .second {
    color: red;
  }

  .thrith {
    color: yellow;
  }
`;
const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
`;
