import { useState } from "react";
import styled from "styled-components";

const initialExercises = [
  {
    id: 1,
    name: "Fibonacci",
    description: "La serie de DIOS, te hará volar la cabeza",
  },
  {
    id: 2,
    name: "Números naturales",
    description: "La serie más famosa, los números naturales!!!.",
  },
  { id: 3, name: "Euler", description: "El número más misterioso del mundooo" },
  {
    id: 4,
    name: "Pi",
    description:
      "El número que le ha quebrado la cabeza a todos los matemáticos del mundo universal ji i iji ji uh iuh iuh iuh uihuihuihi uhuih ihiu hiuh ",
  },
  {
    id: 5,
    name: "Números pares",
    description: "Los números pares es lo más sencillo del multiverso.",
  },
  {
    id: 6,
    name: "Números impares",
    description: "Esta serie es la más dificil de México.",
  },
];

export const NumPadPage = () => {
  const [exercises, setExercises] = useState(initialExercises);

  return (
    <div>
      <Title>Num pad</Title>
      <GridContainer>
        {exercises.map((item) => (
          <Card key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 0.5rem;
`;

const Card = styled.div`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;

  h2 {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
  }

  p {
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    line-height: 1.5;
    overflow: hidden;
    height: 1.5rem;
  }
`;
