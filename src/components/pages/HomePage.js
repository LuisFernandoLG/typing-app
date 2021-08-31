import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { routes } from "../../routes";
import { ExerciseCard } from "../ExerciseCard";
import { Loader } from "../Loader";

const initialExercises = [];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const { fetchData, fetchErrors, loading, data } = useFetch();

  useEffect(() => {
    fetchData(
      "https://api.quotable.io/quotes?maxLength=250&minLength=150&limit=20"
    );
  }, []);

  useEffect(() => {
    if (data === null) return null;
    setExercises(data.results);
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <QuotesContainer>
          {exercises.map((item) => (
            <NavLink to={`${routes.EXERCICE_PAGE}/${item._id}`} key={item._id}>
              <ExerciseCard quote={item.content} author={item.author} />
            </NavLink>
          ))}
        </QuotesContainer>
      )}
    </>
  );
};

const QuotesContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
  a {
    border-radius: 1rem;
    overflow: hidden;
  }
  a:nth-child(even) {
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }

  a:nth-child(odd) {
    background: ${({ theme: { primaryColor } }) => primaryColor};
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`;
