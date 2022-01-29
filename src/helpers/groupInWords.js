import { generate } from 'shortid'

export const groupInwordsGroup = ({ quote }) => {
  let wordsGroup = []
  let word = { id: generate(), items: [] }
  const sizeQuote = quote.length - 1

  quote.forEach((item, i) => {
    if (item.content === ' ') {
      word.items.push(item)
      wordsGroup.push(word)
      word = { id: generate(), items: [] }
    } else if (sizeQuote === i) {
      word.items.push(item)
      wordsGroup.push(word)
    } else {
      word.items.push(item)
    }
  })

  return wordsGroup
}
