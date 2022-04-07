import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fixSpaceKeyErrorWithScroll } from '../../helpers/fixSpaceKeyErrorWithScroll'
import { groupInwordsGroup } from '../../helpers/groupInWords'
import { Key } from './keysComponents/Key'

export const Quote = ({ quote, indexQuote }) => {
  const [words, setWords] = useState(null)

  useEffect(() => {
    const wordsGroup = groupInwordsGroup({ quote })
    fixSpaceKeyErrorWithScroll()
    setWords(wordsGroup)
  }, [])

  useEffect(() => {
    if (words !== null) updateKey()
  }, [indexQuote])

  const updateKey = () => {
    let subIndex = 0

    const copyWords = words.map((item) => {
      return {
        id: item.id,
        items: item.items.map((subItem) => {
          const temp = quote[subIndex]
          temp.id = subItem.id
          subIndex++
          return temp
        })
      }
    })

    setWords(copyWords)
  }

  return (
    <QuoteStyled>
      {words &&
        words.map((word) => (
          <Word key={word.id}>
            {word.items.map(({ id, status, content }) => (
              <Key key={id} type={status}>
                {content}
              </Key>
            ))}
          </Word>
        ))}
    </QuoteStyled>
  )
}

const QuoteStyled = styled.div`
  padding: 1rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  border-radius: ${({ theme: { border_radius } }) => border_radius};
  font-size: 1.5rem;

  max-height: 213px;
  overflow-y: scroll;
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Word = styled.div`
  margin: 0.5rem 0;
`
