import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { Layout } from '../layouts/Layout'
import api from '../services/api'
import styled from 'styled-components'
import { EnglishAbcAdminForm } from '../components/EnglishAbcAdminForm'
import { MecaExerciseForm } from '../components/MecaExerciseForm'
import { AddMecaExerciseForm } from '../components/AddMecaExerciseForm'
import { AddAbcExerciseForm } from '../components/AddAbcExerciseForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Loader } from '../components/Loader'
import { FloatContainer } from '../components/FloatContainer'
// import { EditCourseForm } from '../EditCourseForm'
// import { AddAbcExerciseForm } from '../components/addAbcExerciseForm'

export const EnglishAdminExercisesPage = ({ courseName }) => {
  // eslint-disable-next-line no-unused-vars
  const [exercises, setExercises] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { courseId } = useParams()

  const getData = () => {
    setIsLoading(true)
    api()
      .getCourse({ courseId })
      .then((data) => {
        setExercises(data.data)
        console.log({ x: data.data })
      })
      .catch(() => {
        toast.error('Algo salió mal :(')
        setExercises(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(getData, [])
  return (
    <Layout pd='1rem 5rem'>
      <GridContainer>
        <Card>
          <AddMecaExerciseForm courseId={courseId} updateView={getData} />
        </Card>
        <Card>
          <AddAbcExerciseForm courseId={courseId} updateView={getData} />
        </Card>
      </GridContainer>
      {!exercises
        ? (
        <FlexContainer aj_c jc_c pd='2rem'>
          <FingerLoader />
        </FlexContainer>
          )
        : (
        <>
          <GridContainer>
            {exercises.map((item) => (
              <Card key={item.id}>
                {item.exerciseType === 2
                  ? (
                  <EnglishAbcAdminForm item={item} />
                    )
                  : (
                  <MecaExerciseForm mecaExercise={item} />
                    )}
              </Card>
            ))}
          </GridContainer>
        </>
          )}
      <FloatContainer right="2rem" bottom="2rem" zIndex={200}>
         {isLoading && <Loader medium={true}/>}
      </FloatContainer>
    </Layout>
  )
}

const Card = styled.div`
  padding: 3rem 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  transition: background-image 300ms ease;
  height: max-content;

  /* margin: 1rem 0; */
`

const GridContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`
