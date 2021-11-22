import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { Graph } from "../Graph";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { endpoints } from "../signIn/api";
import { toast } from "react-toastify";

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

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
    }
  }, [fetchErrors]);

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
