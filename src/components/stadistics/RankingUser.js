import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const RankingUser = ({ position, name, score, children }) => {
  return (
    <RankingUserContainer flex gap="1rem">
      <Sticker>{children}</Sticker>
      <Position>{position || <Skeleton width={'3rem'} />}</Position>
      <FlexContainer flex_dc flex_jc_c gap="0.5rem" overflow_h>
        <Name>{name || <Skeleton width={'6rem'} />}</Name>
        <Score>
          {score
            ? (
            <>
              Puntaje: <span>{score}</span>
            </>
              )
            : (
            <Skeleton width={'5rem'} />
              )}
        </Score>
      </FlexContainer>
    </RankingUserContainer>
  )
}

const RankingUserContainer = styled(Wrapper)`
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  color:${({ theme: { fontColor } }) => fontColor};
  
  `

const Sticker = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
`

const Position = styled.div`
  font-size: 4rem;
  font-weight: 700;
`
const Name = styled.p`
  display: block;
  font-size: 1.5rem;
  white-space: nowrap;
`
const Score = styled.span`
  font-size: 1rem;

  span {
    font-weight: 800;
  }
`
