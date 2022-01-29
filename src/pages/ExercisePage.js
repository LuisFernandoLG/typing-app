import styled from 'styled-components'
import { Exercise } from '../components/exercise/Exercise'
import { Score } from '../components/exercise/Score'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'
import { TimerExercise } from '../components/exercise/TimerExercise'
import Skeleton from 'react-loading-skeleton'
import { ToolBar } from '../components/toolbar/ToolBar'
import { useToggle } from '../hooks/useToggle'
import { ToggleButton } from '../components/exercise/ToggleButton'
import { useExercisePage } from '../hooks/useExercisePage'

const KeyBoardIcon = () => <i className='far fa-keyboard' />
const SpeakerIcon = () => <i className='fas fa-volume-up' />

export const ExercisePage = () => {
  const {
    currentExercise,
    markAsCompleted,
    isCompleted,
    markAsTimeOver,
    timeLeft,
    dicrementTime,
    loading,
    results,
    setResults,
    isTimeOver,
  } = useExercisePage()
  const [isSoundActive, toggleIsSoundActive] = useToggle({ init: false })
  const [isKeyboardActive, toggleIsKeyboardActive] = useToggle({ init: false })

  return (
    <WrapperPage>
      <Title>{currentExercise.title || <Skeleton />}</Title>
      {!isTimeOver && !isCompleted && (
        <TimerExercise
          time={timeLeft}
          dicrementTime={dicrementTime}
          markAsTimeOver={markAsTimeOver}
        />
      )}
      <ToolBar>
        <ToggleButton
          state={isSoundActive}
          enableIcon={SpeakerIcon}
          disableIcon={SpeakerIcon}
          ToggleFunction={toggleIsSoundActive}
        />
        <ToggleButton
          state={isKeyboardActive}
          enableIcon={KeyBoardIcon}
          disableIcon={KeyBoardIcon}
          ToggleFunction={toggleIsKeyboardActive}
        />
      </ToolBar>

      {loading || !currentExercise.id ? (
        <Skeleton
          style={{ width: '60rem', height: '10rem', margin: '2rem 0' }}
        />
      ) : results !== null ? (
        <Score
          results={results}
          currentExercise={currentExercise}
          timeTaken={isTimeOver}
        />
      ) : (
        <Exercise
          q={currentExercise.textContent}
          isKeyboardActive={isKeyboardActive}
          markAsCompleted={markAsCompleted}
          setResults={setResults}
          isTimeOver={isTimeOver}
        />
      )}
    </WrapperPage>
  )
}

const WrapperPage = styled(Wrapper)`
  min-height: 100vh;
  width: 100%;
  padding: 0 1rem;
`

const Title = styled.h1`
  width: 100%;
  height: 1rem;
  margin: 0 0;
  text-align: center;
  color: ${({ theme: { primaryColor } }) => primaryColor};
`
