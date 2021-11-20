import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { Exercise } from "../Exercise";
import { Loader } from "../Loader";
import { Score } from "../Score";
import { endpoints } from "../signIn/api";
import { TimerExercise } from "../TimerExercise";

export const ExercisePage = () => {
  const { idQuote } = useParams();

  const { loading, fetchData, data } = useFetch();
  const { fetchData: fetchScore } = useFetch();
  const [exercise, setExercise] = useState(null);
  const [time, setTime] = useState(null);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [pointsCalculated, setPointCalculated] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);

  const { user } = useContext(AuthContext);

  const dicrementTime = () => {
    setTime((time) => (time > 0 ? time - 1 : time));
  };

  useEffect(() => {
    if (time === 0) setIsTimeOver(true);
  }, [time]);

  useEffect(() => {
    if (isCompleted) {
      setTimeTaken(data.data.time - time);
      setTime(0);
    }
  }, [isCompleted]);

  useEffect(() => {
    const interval = setInterval(dicrementTime, 1000);
    return () => clearInterval(interval);
  }, []);

  let history = useHistory();

  useEffect(() => {
    fetchData(`${endpoints.exercise}/${idQuote}`);
  }, []);

  useEffect(() => {
    if (data === null) return null;
    setExercise(data.data.textContent);
    setTime(data.data.time);
  }, [data]);

  useEffect(() => {
    if (results) {
      let percen = Math.trunc(
        (results.succeed * 100) / (results.succeed + results.failed)
      );
      let points = (percen * data.data.points) / 100;
      setPointCalculated(points);
    }
  }, [results]);

  useEffect(() => {
    if (pointsCalculated) {
      let options = {
        method: "POST",
        body: JSON.stringify({
          total_score: pointsCalculated,
          user_id: user.id,
          exercise_id: data.data.id,
          time_taken: timeTaken,
        }),
      };
      fetchScore("http://localhost:8000/score", options);
    }
  }, [pointsCalculated]);

  const goToHomePage = () => history.goBack();

  if (loading) return <Loader />;

  return (
    <ExercisePageContaner>
      {results ? (
        <Score results={results} />
      ) : (
        <>
          <PrimaryButton handleClick={goToHomePage}>Volver</PrimaryButton>
          {time === 0 ? null : (
            <TimerExercise time={time} dicrementTime={dicrementTime} />
          )}
          <AuthorStyled>{data ? data.title : null}</AuthorStyled>
          {exercise !== null && (
            <Exercise
              q={exercise}
              isTimeOver={isTimeOver}
              isCompleted={isCompleted}
              setIsCompleted={setIsCompleted}
              setResults={setResults}
            />
          )}
        </>
      )}
    </ExercisePageContaner>
  );
};

const AuthorStyled = styled.h2`
  text-align: center;
`;

const ExercisePageContaner = styled.div`
  margin: 2rem auto;
`;
