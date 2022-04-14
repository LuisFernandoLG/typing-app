import { Layout } from '../layouts/Layout'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'
import { useParams } from 'react-router-dom'
import { AbcExercise } from '../components/exercises/AbcExercise'

export const EnglishExercisePage = () => {
  const { courseId, exerciseId } = useParams()
  console.log({ courseId, exerciseId })
  // debugger

  const Exercise = ({ exerciseType }) => {
    // if(exerciseType==="meca") return <
    if (exerciseType === 'abcExercise') { return <AbcExercise courseId={courseId} exerciseId={exerciseId} /> }
  }

  return (
    <Layout>
      <BackPageButton backRoute={routesV3.ENGLISH_PAGE.route} />

      {<Exercise exerciseType={'abcExercise'} />}
      {/* <Layout>
        <Title>{currentExercise?.title || <Skeleton width={'20%'} />}</Title>
        <FlexContainer fd_c jc_c ai_c gap='1rem' mg='1rem'>
          {(currentExercise?.answers || [1, 2, 3]).map((item, index) => (
            <Answer
              ref={getRef({ index })}
              tabIndex={index + 1}
              type='button'
              key={item?.id}
              disabled={!!itemSelected}
              className={
                itemSelected
                  ? itemSelected.id === item.id
                    ? itemSelected.isCorrect
                      ? 'yes'
                      : 'no'
                    : null
                  : null
              }
              onClick={() => selectAnswer({ itemSelected: item })}>
              <span className='num-option'>{index + 1}</span>
              {item?.content}
            </Answer>
          ))}
        </FlexContainer>
      </Layout>

      {itemSelected && (
        <>
          <FloatContainer right='10%' top='35%'>
            <FlexContainer fd_c ai_c jc_c>
              <ShorHandKey
                handleKeyDown={handleKeyDown}
                code={'Enter'}
                textLeyend='Presionar enter para continuar'>
                <EnterKey />
              </ShorHandKey>
            </FlexContainer>
          </FloatContainer>

          <FlexContainer jc_fs ai_c>
            {exerciseIndex === exercises.length - 1 && (
              <Link to={routesV3.ENGLISH_PAGE.route} ref={homeBtnRef}>
                <Button Button primary={true} pd='1rem'>
                  Página principal
                </Button>
              </Link>
            )}
          </FlexContainer>

          <FlexContainer ai_fe jc_fe pd='1rem'>
            {exerciseIndex !== exercises.length - 1 && (
              <Link
                to={`${routesV3.ENGLISH_PAGE.route}/${
                  routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route
                }/${categoryId}/${exercises[exerciseIndex + 1].id}`}
                ref={nextBtnRef}>
                <Button Button primary={true} pd='1rem'>
                  Siguiente <IoArrowForward />{' '}
                </Button>
              </Link>
            )}
          </FlexContainer>
        </> */}
      {/* // </Link> */}
      {/* )} */}
    </Layout>
  )
}
