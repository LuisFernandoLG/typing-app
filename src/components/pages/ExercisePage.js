import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
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
    <ExercisePageContaner>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PrimaryButton handleClick={goToHomePage}>Volver</PrimaryButton>
          <AuthorStyled>{data ? data.author : null}</AuthorStyled>
          {exercise !== null && <Exercise q={exercise} />}
        </>
      )}
    </ExercisePageContaner>
  );
};

const AuthorStyled = styled.h2`
  text-align: center;
`;

const ExercisePageContaner = styled.div`
  margin: 0 2rem 0 0;
`;
