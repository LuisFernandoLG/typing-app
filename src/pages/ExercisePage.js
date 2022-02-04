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
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import {
  FaVolumeUp,
  FaVolumeMute,
  FaRegKeyboard,
  FaKeyboard
} from 'react-icons/fa'

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
    isTimeOver
  } = useExercisePage()
  const [isSoundActive, toggleIsSoundActive] = useToggle({ init: false })
  const [isKeyboardActive, toggleIsKeyboardActive] = useToggle({ init: false })

  return (
    <WrapperPage>
      <FlexContainer jc_se ai_c gap="1rem">
        {!isTimeOver && !isCompleted && (
          <TimerExercise
            time={timeLeft}
            dicrementTime={dicrementTime}
            markAsTimeOver={markAsTimeOver}
          />
        )}
        <Title>{currentExercise.title || <Skeleton />}</Title>
        <ToolBar>
          <ToggleButton
            state={isSoundActive}
            enableIcon={FaVolumeUp}
            disableIcon={FaVolumeMute}
            ToggleFunction={toggleIsSoundActive}
          />
          <ToggleButton
            state={isKeyboardActive}
            enableIcon={FaKeyboard}
            disableIcon={FaRegKeyboard}
            ToggleFunction={toggleIsKeyboardActive}
          />
        </ToolBar>
      </FlexContainer>

      {loading || !currentExercise.id
        ? (
        <Skeleton
          style={{ width: '60rem', height: '10rem', margin: '2rem 0' }}
        />
          )
        : (isCompleted || isTimeOver) && results.length !== 0
            ? (
        <Score
          results={results}
          currentExercise={currentExercise}
          timeTaken={isTimeOver ? currentExercise.time : currentExercise.time - timeLeft}
        />
              )
            : (
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
  margin: 0 0;
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};
`
