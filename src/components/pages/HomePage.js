import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { ExerciseCard } from "../ExerciseCard";

const initialExercises = [];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?maxLength=150&minLength=50&limit=10")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setExercises(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <QuotesContainer>
      {exercises.map((item) => (
        <NavLink to={`${routes.EXERCICE_PAGE}/${item._id}`} key={item._id}>
          <ExerciseCard quote={item.content} author={item.author} />
        </NavLink>
      ))}
    </QuotesContainer>
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
