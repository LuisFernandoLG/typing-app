import { useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'
import { useAdminExercises } from '../hooks/useAdminExercises'
import { AdminExerciseItem } from '../components/admin/AdminExerciseItem'
import { ExerciseForm } from '../components/admin/ExerciseForm'
import { Loader } from '../components/Loader'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'

export const AdminPage = () => {
  const {
    loading,
    updateExercise,
    exercieses,
    categories,
    difficulties,
    statuses,
    exerLoading,
    addExercise,
    exerLoadingAdded
  } = useAdminExercises()

  const { user } = useContext(AuthContext)

  if (user.typeUser === 2) {
    return (
      <NotAllowedPage flex flex_jc_c flex_ai_c>
        <h2>
          Lo sentimos, pero no tienes permisos para acceder a este apartado :(
        </h2>
      </NotAllowedPage>
    )
  }

  return (
    <AdminPageWrapper>
      <Title>Admin</Title>
      <ExerciseForm
        difficulties={difficulties}
        categories={categories}
        statuses={statuses}
        addExercise={addExercise}
        exerLoadingAdded={exerLoadingAdded}
      />
      {exerLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      <Title>Ejercicios</Title>

      {loading && <Loader />}

      {!loading &&
        exercieses.map((adminExercise) => (
          <ExercisesWrapper key={exercieses.id}
          flex flex_jc_c>
            <AdminExerciseItem
              adminExercise={adminExercise}
              categories={categories}
              difficulties={difficulties}
              statuses={statuses}
              updateExercise={updateExercise}
            />
          </ExercisesWrapper>
        ))}
    </AdminPageWrapper>
  )
}

const NotAllowedPage = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
`

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
`

const AdminPageWrapper = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
`

const ExercisesWrapper = styled(Wrapper)`
  margin: 0 auto;
  width: 100%;
`

const LoaderWrapper = styled.div`
  width: min-content;

  position: fixed;
  right: 4rem;
  top: 50%;
  padding: 2rem;

  border-radius: 30px;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
`
