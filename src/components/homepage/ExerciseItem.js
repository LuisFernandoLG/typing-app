import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { routesV2 } from '../../routes'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import Skeleton from 'react-loading-skeleton'

export const ExerciseItem = ({ id, title, content, category, difficulty }) => {
  const exerciseRoute =
    routesV2.LOGGED_APP.subPages.EXERCISE_PAGE.routBaseParam

  return (
    <ExerciseItemContainer to={`${exerciseRoute}/${id}`} id={id}>
      <Title>{title || <Skeleton width={'20%'} />}</Title>
      <Content>{content || <Skeleton count={1} />}</Content>
      <Wrapper flex flex_jc_fe gap="1rem">
        <Category>{difficulty || <Skeleton width={'3rem'} />}</Category>
        <Diffculty>{category || <Skeleton width={'3rem'} />}</Diffculty>
      </Wrapper>
    </ExerciseItemContainer>
  )
}

const ExerciseItemContainer = styled(Link)`
  padding: 2rem;
  border-radius: ${({ theme: { border_radius } }) => border_radius};
  background: ${({ theme: { whiteColor } }) => whiteColor};
  transition:background 300ms ease;

  &:hover {
    background: linear-gradient(
    to right,
    ${({ theme: { primaryColor } }) => primaryColor} 0%,
    ${({ theme: { secondaryColor } }) => secondaryColor} 100%
  );


  }

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
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`
const Content = styled.p`
  margin: 0.5rem 0;
  max-width: 90%;
  font-size: 1.2rem;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  line-height: 1.5rem;
  text-align: left;

  /* Limit lines */
  text-overflow: ellipsis;
  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`

const TagStyle = styled.span`
  background: ${({ theme: { disableColor } }) => disableColor};
  padding: 0.5rem 1rem;
  color: ${({ theme: { fontColor } }) => fontColor};

  font-weight: 700;
  border-radius: ${({ theme: { border_radius } }) => border_radius};
`

const Category = styled(TagStyle)``
const Diffculty = styled(TagStyle)``
