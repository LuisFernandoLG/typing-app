import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { Exercise } from "../components/exercise/Exercise";
import { Loader } from "../components/Loader";
import { Score } from "../components/exercise/Score";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";
import { endpoints } from "../components/signIn/api";
import { TimerExercise } from "../components/exercise/TimerExercise";
import { goTopPage } from "../helpers/goToTopPage";

export const ExercisePage = () => {
  const { idQuote } = useParams();

  const { loading, fetchData, data } = useFetch();
  const { fetchData: fetchScore } = useFetch();
  const [exercise, setExercise] = useState(null);
  const [title, setTitle] = useState(null);
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

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
      }
    });
    return () => {
      window.removeEventListener("keypress", () => {});
    };
  }, []);

  useEffect(() => {
    fetchData(`${endpoints.exercise}/${idQuote}`);
  }, []);

  useEffect(() => {
    if (data === null) return null;

    setTimeout(() => {
      goTopPage();
    }, 2000);

    setExercise(data.data.textContent);
    setTime(data.data.time);
    setTitle(data.data.title);
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
          time_taken: isTimeOver ? data.data.time : timeTaken,
        }),
      };
      fetchScore(endpoints.score, options);
    }
  }, [pointsCalculated]);

  return (
    <WrapperPage flex flex_dc flex_jc_fs flex_ai_c>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Wrapper flex flex_jc_c flex_ai_c>
            <TimerExercise time={time} dicrementTime={dicrementTime} />
            <Title>{title}</Title>
          </Wrapper>

          {results ? (
            <Score results={results} pointsCalculated={pointsCalculated} />
          ) : (
            <>
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
        </>
      )}
    </WrapperPage>
  );
};

const WrapperPage = styled(Wrapper)`
  min-height: 100vh;
  width: 100%;
  padding: 0 1rem;
`;

const Title = styled.h1`
  margin: 0 0;
  text-align: center;
  color: ${({ theme: { bgColor } }) => bgColor};
`;
