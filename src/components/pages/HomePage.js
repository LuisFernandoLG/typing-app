import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { fadeInAnimation } from "../../style/animations";
import { ExerciseItem } from "../ExerciseItem";
import { Loader } from "../Loader";
import { ToolBarSearch } from "../searchBar/ToolBarSearch";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { toast } from "react-toastify";
import { endpoints } from "../signIn/api";

const initialExercises = [];

const initialCategories = ["famous", "love", "education"];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const { fetchData, fetchErrors, loading, data } = useFetch();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchData(endpoints.exercises);
  }, []);

  useEffect(() => {
    if (data === null) return null;
    setExercises(data.data);
  }, [data]);

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
    }
  }, [fetchErrors]);

  return (
    <HomeContainer>
      <ToolBarSearch category={category} />
      {loading ? (
        <Loader />
      ) : (
        <QuotesContainer>
          {exercises.map(({ id, title, textContent, category, difficulty }) => (
            <ExerciseItem
              key={id}
              id={id}
              title={title}
              content={textContent}
              category={category}
              difficulty={difficulty}
            />
          ))}
        </QuotesContainer>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled(Wrapper)`
  margin: 1rem 2rem;
  width: 100%;
  animation: ${fadeInAnimation} 800ms ease;
`;

const QuotesContainer = styled.main``;
