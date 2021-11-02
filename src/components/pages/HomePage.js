import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { fadeInAnimation } from "../../style/animations";
import { ExerciseItem } from "../ExerciseItem";
import { Loader } from "../Loader";
import { ToolBarSearch } from "../searchBar/ToolBarSearch";
import { Wrapper } from "../shareStyleComponents/Wrapper";

const initialExercises = [
  {
    id: "lJ60rOYWci",
    title: "El abismo",
    content:
      "Hay una diferencia entre tú y yo, ambos miramos dentro del abismo, pero cuando él nos miró, tú pestañeaste.",
    category: "Filosofía",
    difficulty: "Fácil",
  },

  {
    id: "PdcCF7bmZfA",
    title: "Inteligencia",
    content:
      "La cosas más dulce que he escuchado es que no tengo que tener todas las respuestas, solo una pequeña luz a la cual poder llamar mía.",
    category: "Filosofía",
    difficulty: "Fácil",
  },
  {
    id: "FMZiiLHfCOc",
    title: "Hijos del universo",
    content:
      "Me enseñaste me el coraje de las estrellas antes de que partieras, que raro y hermoso es que existamos.",
    category: "Filosofía",
    difficulty: "Fácil",
  },
  {
    id: "CD5Q8vuy9kSZ",
    title: "Rey del mundo",
    content:
      "Me propuse a gobernar al mundo, solo con un escudo de papel y una espada de madera, ninguna montaña se atreve a ponerse en mi camino, incluso los océanos tiemblan a mi paso, la marea es valiente pero siempre se retira, incluso la arena se encoge a mi paso.",
    category: "Soberbia",
    difficulty: "Medio",
  },
];

const initialCategories = ["famous", "love", "education"];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const { fetchData, fetchErrors, loading, data } = useFetch();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // fetchData(
    //   "https://api.quotable.io/quotes?maxLength=250&minLength=150&limit=20"
    // );
  }, []);

  useEffect(() => {
    // if (data === null) return null;
    // setExercises(data.results);
  }, [data]);

  return (
    <HomeContainer>
      <ToolBarSearch />
      {loading ? (
        <Loader />
      ) : (
        <QuotesContainer>
          {exercises.map(({ id, title, content, category, difficulty }) => (
            <ExerciseItem
              key={id}
              id={id}
              title={title}
              content={content}
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
  margin: 1rem auto;
  max-width: 70%;
  animation: ${fadeInAnimation} 800ms ease;
`;

const QuotesContainer = styled.main``;
