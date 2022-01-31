import { Bubble } from 'react-chartjs-2'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const ProgressGraph = ({ scoreHistory, title }) => {
  return (
    <Container>
      <Title>{title || <Skeleton width={'5rem'} />}</Title>
      {scoreHistory
        ? (
        <Graph scoreHistory={scoreHistory} />
          )
        : (
        <Skeleton height={'10rem'} />
          )}
    </Container>
  )
}

const Graph = ({ scoreHistory }) => {
  const scores = scoreHistory.map(({ totalScore, lastTimeTaken }) => ({
    x: lastTimeTaken,
    y: totalScore
  }))

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Puntos'
        }
      },

      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tiempo (segundos)'
        }
      }
    }
  }

  const data = {
    datasets: [
      {
        label: 'Intentos',
        data: scores,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return <Bubble options={options} data={data} />
}

const Title = styled.h2`
  font-size: 1rem;
  text-align: center;
`

const Container = styled.div`
  padding: 1rem;
  background ${({ theme: { primaryColor } }) => primaryColor};
  border-radius: 1rem;
  height: min-content;
`
