import { useContext, useState, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext'
import { useFetch } from '../hooks/useFetch'
import { endpoints } from '../components/signIn/api'
import { toast } from 'react-toastify'
import { ProgressGraph } from '../components/stadistics/ProgressGraph'
import styled from 'styled-components'
import { getArrayBySize } from '../helpers/getArrayBySize'
import { IoCheckmarkCircle, IoTime } from 'react-icons/io5'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

const skeletons = getArrayBySize({ size: 6 })

// problemas de tipado
//  1 !== "1"
const statuses = {
  COMPLETED: '1',
  IMCOMPLETED: '2'
}

export const StadisticsPage = () => {
  const { user } = useContext(AuthContext)
  const { fetchData, data, fetchErrors, loading } = useFetch()
  const [exercisesScore, setExercisesScore] = useState([])

  useEffect(() => {
    const query = `${endpoints.stadisticsUser}/${user.id}`
    fetchData(query)
  }, [])

  useEffect(() => {
    if (data) setExercisesScore(data.data)
    console.log({ data })
  }, [data])

  useEffect(() => {
    if (fetchErrors) {
      toast.error('Algo salió mal :(')
    }
  }, [fetchErrors])

  return (
    <PageWrapper>
      <Title>Estadísticas</Title>
      {/* <Subtitle>Mejores puntajes</Subtitle> */}
      <GridContainer>
        {loading
          ? skeletons.map((_, i) => <ProgressGraph key={`${i}-pbs`} />)
          : data &&
            exercisesScore.map((scores, i) => {
              const lastItem = scores.length - 1
              return (
                <ScoreCard
                  className={
                    scores[lastItem].status === statuses.COMPLETED
                      ? 'finished'
                      : null
                  }
                  key={`${i}-pbx`}>
                  {scores[lastItem].status === statuses.COMPLETED
                    ? <IoCheckmarkCircle className='checkmark'/>
                    : <IoTime className='watchmark'/>
                  }
                  <FlexContainer fd_c key={'$dw-pb'}>
                    <h5 className='title'>{scores[lastItem].title}</h5>
                    <p>Mejor tiempo: {scores[lastItem].lastTimeTaken}s</p>
                    <p>Puntos obtenidos: {scores[lastItem].totalScore}</p>
                  </FlexContainer>
                </ScoreCard>
              )
            })}
      </GridContainer>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100%;
`

const GridContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(14.75rem, 1fr));
  gap: 2rem;
`

const ScoreCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { accentColor } }) => accentColor};
  padding: 1rem;
  color: ${({ theme: { fontColor } }) => fontColor};

  /* flex-wrap: ; */
  background: ${({ theme: { correctedColor } }) => correctedColor};

  &&.finished {
    background: ${({ theme: { successColor } }) => successColor};
  }

  position: relative;

  .checkmark, .watchmark{
    position: absolute;
    top: -1rem;
    right: -1rem;
    font-size: 3rem;

    padding: 0.2rem;
    border-radius: 8rem;
  }

  .checkmark {
    color: ${({ theme: { successColor } }) => successColor};
    background: ${({ theme: { accentColor } }) => accentColor};
  }
  
  .watchmark{
    color: ${({ theme: { correctedColor } }) => correctedColor};
    background: ${({ theme: { accentColor } }) => accentColor};    
  }
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};
`
