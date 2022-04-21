import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { defaultImgUser } from '../../constants/defaultImgUser'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const RankingUser = ({ position, name, score, imageProfile = defaultImgUser, children, isLoading }) => {
  return (
    <RankingUserContainer flex gap="1rem">
      <Sticker><StickerPosition>{position}</StickerPosition></Sticker>
      <Position>{ isLoading ? <Skeleton circle height="100%" /> : <Image src={imageProfile || defaultImgUser} alt="no"/> }</Position>
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
  top: 0;
  left: -1rem;
`

const Position = styled.div`
  font-size: 4rem;
  font-weight: 700;
  width:80px;
  height:80px;
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

const Image = styled.img`
width: 100%;
height:100%;
object-fit: cover;
border-radius: 10rem;
image-rendering: smooth;

`

const StickerPosition = styled.span`
width: 60px;
height: 60px;
background:${({ theme: { tertiaryColor } }) => tertiaryColor};
padding:1rem;
border-radius:10rem;
font-weight:600;
`
