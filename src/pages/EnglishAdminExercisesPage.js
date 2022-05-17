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
// import { AddAbcExerciseForm } from '../components/addAbcExerciseForm'

export const EnglishAdminExercisesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [exercises, setExercises] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { courseId } = useParams()

  useEffect(() => {
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
  }, [])
  return (
    <Layout>
      {isLoading
        ? (
        <FingerLoader />
          )
        : (
        <>
          <GridContainer>
            <Card>
              <AddMecaExerciseForm courseId = {courseId}/>
            </Card>
            <Card>
              {' '}
              <AddAbcExerciseForm courseId = {courseId}/>
            </Card>
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
    </Layout>
  )
}

const Card = styled.div`
  padding: 3rem 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  transition: background-image 300ms ease;

  margin: 1rem 0;
  /* height:max-content; */
`

// const MecaExerciseItem = styled.div`
//   /* background:blue; */
// `

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`
