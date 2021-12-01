import { Bubble, Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import styled from "styled-components";

export const ProgressGraph = ({ scoreHistory }) => {
  const scores = scoreHistory.map(({ totalScore, lastTimeTaken }) => ({
    x: lastTimeTaken,
    y: totalScore,
  }));

  console.log(scores);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: scores,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Bubble options={options} data={data} />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  border-radius: 1rem;
`;
