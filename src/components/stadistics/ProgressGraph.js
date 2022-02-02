import { Bubble } from 'react-chartjs-2'
import styled, { useTheme } from 'styled-components'
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

  const theme = useTheme()

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
        backgroundColor: theme.primaryColor
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
  margin-top:2rem;
  background: ${({ theme: { whiteColor } }) => whiteColor};
  border-radius: 1rem;
  height: min-content;
  padding:1rem;
  
`
