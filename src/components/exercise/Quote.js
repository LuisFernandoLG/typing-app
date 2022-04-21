import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fixSpaceKeyErrorWithScroll } from '../../helpers/fixSpaceKeyErrorWithScroll'
import { groupInwordsGroup } from '../../helpers/groupInWords'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { Key } from './keysComponents/Key'

export const Quote = ({ quote, indexQuote }) => {
  const [words, setWords] = useState(groupInwordsGroup({ quote: quote }))

  useEffect(() => {
    fixSpaceKeyErrorWithScroll()
    putWordsInGroups({ quote })
  }, [])

  const putWordsInGroups = ({ quote }) => {
    const wordsGroup = groupInwordsGroup({ quote })
    setWords(wordsGroup)
  }

  useEffect(() => {
    const wordsGroup = groupInwordsGroup({ quote })
    fixSpaceKeyErrorWithScroll()
    setWords(updateKey({ tempWords: wordsGroup }))
  }, [quote])

  useEffect(() => {
    const wordsGroup = groupInwordsGroup({ quote })
    if (words !== null) updateKey({ tempWords: wordsGroup })
  }, [indexQuote, quote])

  const updateKey = ({ tempWords }) => {
    let subIndex = 0
    console.log({ tempWords })
    const copyWords = tempWords.map((item) => {
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
          <Word key={word.id} jc_c ai_c>
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
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  font-size: 1.5rem;

  overflow-y: hidden;
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  gap:0.0313rem;
`

const Word = styled(FlexContainer)`
  margin: 0.2em 0;
`
