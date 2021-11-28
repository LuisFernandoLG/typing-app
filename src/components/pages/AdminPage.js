import styled from "styled-components";
import { useAdminExercises } from "../../hooks/useAdminExercises";
import { AdminExerciseItem } from "../AdminExerciseItem";
import { ExerciseForm } from "../ExerciseForm";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";

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
    exerLoadingAdded,
  } = useAdminExercises();

  return (
    <AdminPageWrapper>
      <h2>AdminPage</h2>
      <ExerciseForm
        difficulties={difficulties}
        categories={categories}
        statuses={statuses}
        addExercise={addExercise}
        exerLoadingAdded={exerLoadingAdded}
      />
      {loading && <Loader />}
      {exerLoading && <Loader />}

      {!loading &&
        exercieses.map((adminExercise) => (
          <ExercisesWrapper flex flex_jc_c>
            <AdminExerciseItem
              key={exercieses.id}
              adminExercise={adminExercise}
              categories={categories}
              difficulties={difficulties}
              statuses={statuses}
              updateExercise={updateExercise}
            />
          </ExercisesWrapper>
        ))}
    </AdminPageWrapper>
  );
};

const AdminPageWrapper = styled(Wrapper)`
  width: 100%;
`;

const ExercisesWrapper = styled(Wrapper)`
  margin: 0 auto;
  width: 100%;
`;
