import styled, { css } from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import Skeleton from 'react-loading-skeleton'

export const ExerciseItem = ({ id, title, content, category, difficulty, isCompleted }) => {
  return (
    <ExerciseItemContainer id={id} isCompleted={isCompleted}>
      <Title>{title || <Skeleton width={'20%'} />}</Title>
      <Content>{content || <Skeleton count={1} />}</Content>
      <Wrapper flex flex_jc_fe gap='1rem'>
        <Category>{difficulty || <Skeleton width={'3rem'} />}</Category>
        <Diffculty>{category || <Skeleton width={'3rem'} />}</Diffculty>
      </Wrapper>
    </ExerciseItemContainer>
  )
}

const ExerciseItemContainer = styled.div`
  padding: 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { accentColor } }) => accentColor};
  transition: background-image 300ms ease;

  .isCompleted

  &:hover {
    background-image: ${({ theme: { secondaryGradient } }) =>
      secondaryGradient};
  }

  ${({ theme: { successColor, fontColor, accentColor }, isCompleted }) =>
    isCompleted
      ? `
      background:${successColor};
      color:${fontColor};`
      : `
      background:${accentColor};
      color:${fontColor};
      border: 3px dashed ${fontColor};
      opacity:0.8;
  `}


  ${({ id }) =>
    id === undefined
      ? css`
          pointer-events: none;
          cursor: default;
        `
      : null}
`
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
const Content = styled.p`
  margin: 0.5rem 0;
  max-width: 90%;
  font-size: 1.2rem;
  color: ${({ theme: { fontColor } }) => fontColor};
  line-height: 1.5rem;
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const TagStyle = styled.span`
  background: ${({ theme: { disableColor } }) => disableColor};
  padding: 0.5rem;
  color: ${({ theme: { fontColor } }) => fontColor};

  font-weight: 700;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`

const Category = styled(TagStyle)``
const Diffculty = styled(TagStyle)``
