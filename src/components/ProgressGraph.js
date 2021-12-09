import { Bubble, Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import styled from "styled-components";

export const ProgressGraph = ({ scoreHistory, title }) => {
  const scores = scoreHistory.map(({ totalScore, lastTimeTaken }) => ({
    x: lastTimeTaken,
    y: totalScore,
  }));

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Puntos",
        },
      },

      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Tiempo (segundos)",
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Intentos",
        data: scores,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Bubble options={options} data={data} />
    </Container>
  );
};

const Title = styled.h2`
  font-size: 1rem;
  text-align: center;
`;

const Container = styled.div`
  padding: 1rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  border-radius: 1rem;
  height: min-content;
`;
