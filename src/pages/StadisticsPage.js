import { useContext, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "../components/Loader";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";
import { endpoints } from "../components/signIn/api";
import { toast } from "react-toastify";
import { ProgressGraph } from "../components/stadistics/ProgressGraph";
import styled from "styled-components";

export const StadisticsPage = () => {
  const { user } = useContext(AuthContext);
  const { fetchData, data, fetchErrors, loading } = useFetch();
  const [exercisesScore, setExercisesScore] = useState([]);

  useEffect(() => {
    const query = `${endpoints.stadisticsUser}/${user.id}`;
    fetchData(query);
  }, []);

  useEffect(() => {
    if (data) setExercisesScore(data.data);
  }, [data]);

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
    }
  }, [fetchErrors]);

  return (
    <PageWrapper>
      <Title>Estadísticas</Title>

      <GridContainer>
        {loading ? (
          <Loader />
        ) : (
          data &&
          exercisesScore.map((item, i) => (
            <ProgressGraph key={i} scoreHistory={item} title={item[0].title} />
          ))
        )}
      </GridContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
`;
