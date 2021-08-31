import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { Exercise } from "../Exercise";
import { Loader } from "../Loader";

export const ExercisePage = () => {
  const { idQuote } = useParams();

  const { loading, fetchData, data } = useFetch();
  const [exercise, setExercise] = useState(null);

  let history = useHistory();

  useEffect(() => {
    fetchData(`https://api.quotable.io/quotes/${idQuote}`);
  }, []);

  useEffect(() => {
    if (data === null) return null;
    setExercise(data.content);
  }, [data]);

  const goToHomePage = () => history.goBack();

  return (
    <div>
      <PrimaryButton handleClick={goToHomePage}>Volver</PrimaryButton>
      <h1>Ejercicio </h1>

      {loading ? <Loader /> : null}
      {exercise !== null && <Exercise q={exercise} />}
    </div>
  );
};
