import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Exercise } from "../Exercise";

export const ExercisePage = () => {
  const { idQuote } = useParams();

  const { loading, fetchData, data } = useFetch();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetchData(`http://staging.quotable.io/quotes/${idQuote}`);
  }, []);

  useEffect(() => {
    if (data === null) return null;
    setExercise(data.content);
  }, [data]);

  return (
    <div>
      <h1>Ejercicio </h1>

      {loading ? <p>Cargando . . .</p> : null}

      {exercise !== null && <Exercise q={exercise} />}
    </div>
  );
};
