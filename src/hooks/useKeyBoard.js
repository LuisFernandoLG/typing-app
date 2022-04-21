import { useEffect, useState } from 'react'
import { generate } from 'shortid'
import { Howl } from 'howler'
const initialKeys = [
  {
    id: generate(),
    name: '|'
  },
  {
    id: generate(),
    name: '1'
  },
  {
    id: generate(),
    name: '2'
  },
  {
    id: generate(),
    name: '3'
  },

  {
    id: generate(),
    name: '4'
  },

  {
    id: generate(),
    name: '5'
  },

  {
    id: generate(),
    name: '6'
  },

  {
    id: generate(),
    name: '7'
  },

  {
    id: generate(),
    name: '8'
  },

  {
    id: generate(),
    name: '9'
  },
  {
    id: generate(),
    name: '0'
  },

  {
    id: generate(),
    name: '?'
  },

  {
    id: generate(),
    name: '¿'
  },

  {
    id: generate(),
    name: 'Backspace'
  },

  {
    id: generate(),
    name: 'Tab'
  },

  {
    id: generate(),
    name: 'q'
  },

  {
    id: generate(),
    name: 'w'
  },

  {
    id: generate(),
    name: 'e'
  },

  {
    id: generate(),
    name: 'r'
  },

  {
    id: generate(),
    name: 't'
  },

  {
    id: generate(),
    name: 'y'
  },

  {
    id: generate(),
    name: 'u'
  },

  {
    id: generate(),
    name: 'i'
  },

  {
    id: generate(),
    name: 'o'
  },

  {
    id: generate(),
    name: 'p'
  },
  {
    id: generate(),
    name: '´'
  },
  {
    id: generate(),
    name: '+'
  },
  {
    id: generate(),
    name: 'Enter'
  },
  {
    id: generate(),
    name: 'CapsLock'
  },

  {
    id: generate(),
    name: 'a'
  },

  {
    id: generate(),
    name: 's'
  },

  {
    id: generate(),
    name: 'd'
  },

  {
    id: generate(),
    name: 'f'
  },

  {
    id: generate(),
    name: 'g'
  },

  {
    id: generate(),
    name: 'h'
  },

  {
    id: generate(),
    name: 'j'
  },

  {
    id: generate(),
    name: 'k'
  },

  {
    id: generate(),
    name: 'l'
  },

  {
    id: generate(),
    name: 'ñ'
  },
  {
    id: generate(),
    name: '{'
  },
  {
    id: generate(),
    name: '}'
  },

  {
    id: generate(),
    name: 'Shift'
  },

  {
    id: generate(),
    name: '<'
  },

  {
    id: generate(),
    name: 'z'
  },

  {
    id: generate(),
    name: 'x'
  },

  {
    id: generate(),
    name: 'c'
  },

  {
    id: generate(),
    name: 'v'
  },
  {
    id: generate(),
    name: 'b'
  },

  {
    id: generate(),
    name: 'n'
  },

  {
    id: generate(),
    name: 'm'
  },

  {
    id: generate(),
    name: ','
  },

  {
    id: generate(),
    name: '.'
  },
  {
    id: generate(),
    name: '-'
  },
  {
    id: generate(),
    name: 'shift right'
  },
  {
    id: generate(),
    name: 'Control'
  },
  {
    id: generate(),
    name: 'Alt'
  },
  {
    id: generate(),
    name: ' '
  },
  {
    id: generate(),
    name: 'AltGraph'
  },

  {
    id: generate(),
    name: '____'
  }
]

const audios = [
  // "one.mp3",
  // "two.mp3",
  // "three.mp3",
  // "four.mp3",
  // "five.mp3",
  'six.mp3'
]

const convertQuote = (q) =>
  q.split('').map((letter) => ({
    id: generate(),
    key: letter,
    visited: 0,
    succeed: null
  }))

const initialIndexQuote = 0

const excludeKeysFromPressed = [
  'Control',
  'Shift',
  'CapsLock',
  'Alt',
  'AltGraph',
  'shift right'
]

export const useKeyBoard = (q) => {
  // eslint-disable-next-line no-unused-vars
  const [keys, setKeys] = useState(initialKeys)
  const [keyPressed, setKeyPressed] = useState(null)
  const [wrongKeyPressed, setWrongKeyPressed] = useState(null)
  const [quote, setQuote] = useState(convertQuote(q))
  const [indexQuote, setIndexQuote] = useState(initialIndexQuote)
  // const [isUpperCase, setIsUpperCase] = useState(false)
  const [numErrors, setNumErrors] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState(null)

  const setSucceedKey = () => {
    const keyItem = quote[indexQuote]
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: true
    }
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    )

    setQuote(quoteCopy)
  }

  const setNotSuceedKey = () => {
    const keyItem = quote[indexQuote]
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: false
    }
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    )

    setQuote(quoteCopy)
  }

  const setRetypeKey = () => {
    const keyItem = quote[indexQuote]
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: null
    }
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    )

    setQuote(quoteCopy)
  }

  const addKeyPressed = (e) => {
    setKeyPressed({
      id: generate(),
      key: e.key
    })
  }

  const getResults = () => {
    const template = {
      errors: 0,
      succeed: 0,
      total: quote.length - 1
    }
    const xresults = quote.reduce(
      (prev, item, _) =>
        item.succeed
          ? { ...prev, succeed: prev.succeed + 1 }
          : { ...prev, errors: prev.errors + 1 },
      template
    )

    setResults(xresults)
  }

  const goNextIndexQuote = () => {
    if (quote.length - 1 === indexQuote) {
      setQuote(convertQuote(q))
      setIndexQuote(initialIndexQuote)
    } else setIndexQuote(indexQuote + 1)
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const isSpecialKey = excludeKeysFromPressed.every(
        (item) => item !== e.key
      )
      if (isSpecialKey) addKeyPressed(e)
    })
    return () => window.removeEventListener('keydown', () => {})
  }, [])

  useEffect(() => {
    if (!keyPressed) return

    const isBackSpacePressed = keyPressed.key === 'Backspace'
    const isFirstKey = indexQuote === 0
    const isLastKey = indexQuote === quote.length - 1
    const isKeyPressedCorrect = keyPressed.key === quote[indexQuote].key

    if (isBackSpacePressed && isFirstKey) return false

    if (isLastKey) {
      getResults()
      return setIsCompleted(true)
    }

    if (isBackSpacePressed && !isFirstKey) {
      setWrongKeyPressed(null)
      setRetypeKey()
      return setIndexQuote(indexQuote - 1)
    }

    if (isKeyPressedCorrect) {
      playAudioEffect()
      setWrongKeyPressed(null)
      setSucceedKey()
      goNextIndexQuote()
    } else {
      playErrorSound()
      setNotSuceedKey()
      goNextIndexQuote()
      setNumErrors(numErrors + 1)
      setWrongKeyPressed(keyPressed.key)
    }
  }, [keyPressed])

  const playErrorSound = () => {
    const audio = 'fail.wav'
    const sound = new Howl({
      src: [audio]
    })
    sound.play()
  }

  const getRandomSound = () => {
    const minimum = 0
    const maximum = audios.length - 1
    const index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
    return audios[index]
  }

  const playAudioEffect = () => {
    const audio = getRandomSound()
    const sound = new Howl({
      src: [audio]
    })
    sound.play()
  }

  return {
    keyPressed,
    keys,
    quote,
    indexQuote,
    wrongKeyPressed,
    isCompleted,
    results
  }
}
