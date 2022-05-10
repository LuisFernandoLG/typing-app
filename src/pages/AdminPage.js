import { useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'
import { useAdminExercises } from '../hooks/useAdminExercises'
import { AdminExerciseItem } from '../components/admin/AdminExerciseItem'
import { ExerciseForm } from '../components/admin/ExerciseForm'
import { Loader } from '../components/Loader'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

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

<FlexContainer jc_c ai_c mg="2rem">

      {loading
        ? <FingerLoader />
        : <ExercisesWrapper>
        {!loading &&
          exercieses.map((adminExercise) => (
            <AdminExerciseItem
              key={exercieses.id}
              adminExercise={adminExercise}
              categories={categories}
              difficulties={difficulties}
              statuses={statuses}
              updateExercise={updateExercise}
            />
          ))}
      </ExercisesWrapper>}
            </FlexContainer>
    </AdminPageWrapper>
  )
}

const NotAllowedPage = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
`

const Title = styled.h2`
  font-size: 3.5em;
  text-align: center;
  color:${({ theme: { fontColor } }) => fontColor};
`

const AdminPageWrapper = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
`

const ExercisesWrapper = styled(Wrapper)`
  width: 100%;
  margin:2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
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
