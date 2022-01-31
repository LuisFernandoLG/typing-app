import styled from 'styled-components'
import { Wrapper } from './shareStyleComponents/Wrapper'

export const BubbleKey = ({ keyWanted }) => {
  return (
    <Wrapper flex flex_jc_c gap="1rem">
      {keyWanted && (
        <BubbleKeyStyled>
          <h2>Wanted</h2>
          {/* <span>{keyWanted}</span> */}
        </BubbleKeyStyled>
      )}
    </Wrapper>
  )
}

const BubbleKeyStyled = styled.div`
  padding: 1rem;
  font-size: 3rem;

  background: #272727;
  color: #eeeeee;

  padding: 1rem 2rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* } */
`
