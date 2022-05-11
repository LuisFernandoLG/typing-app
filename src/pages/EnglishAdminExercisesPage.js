import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { Layout } from '../layouts/Layout'
import api from '../services/api'
import styled from 'styled-components'
// import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
// import { useSignInForm } from '../hooks/useSignInForm'
// import GroupInput from '../components/inputs/GroupInput'
// import { useForm } from 'react-hook-form'
import { EnglishAbcAdminForm } from '../components/EnglishAbcAdminForm'
// import GroupInput from '../components/inputs/GroupInput'
// import styled from "styled-components"

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
            exercises.map((item) => (
          <Card key={item.id}>
            {item.exerciseType === 2
              ? (
              <EnglishAbcAdminForm item={item} />
                )
              : (
              <MecaExerciseItem>
                <h3>Titulo</h3>
                <p>{item.title}</p>

                <h4>Contenido</h4>
                <p>{item.textContent}</p>
              </MecaExerciseItem>
                )}
          </Card>
            ))
          )}
    </Layout>
  )
}

const Card = styled.div`
  padding: 1rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  transition: background-image 300ms ease;

  margin: 1rem 0;
`

const MecaExerciseItem = styled.div`
  /* background:blue; */
`
