import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import AuthContext from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { Graph } from "../Graph";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { endpoints } from "../signIn/api";

export const StadisticsPage = () => {
  const { user } = useContext(AuthContext);
  const { fetchData, data, fetchErrors, loading } = useFetch();
  const [exercisesScore, setExercisesScore] = useState([]);

  useEffect(() => {
    const query = `${endpoints.score}/${user.id}`;
    fetchData(query);
  }, []);

  useEffect(() => {
    if (data) setExercisesScore(data.data);
  }, [data]);

  return (
    <div>
      <h2>Estadísticas</h2>

      {loading ? (
        <Loader />
      ) : (
        exercisesScore.map((dataUser) => (
          <Wrapper>{JSON.stringify(dataUser)}</Wrapper>
        ))
      )}
      <Graph />
    </div>
  );
};
