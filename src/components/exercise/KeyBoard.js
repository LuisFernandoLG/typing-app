import { useEffect, useState } from 'react'
import { generate } from 'shortid'
import styled, { keyframes } from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'

const initialKeys = [
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '|',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '1',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '2',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '3',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '4',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '5',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '6',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '7',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '8',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '9',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '0',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '?',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '¿',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Backspace',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Tab',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'q',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'w',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'e',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'r',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 't',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'y',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'u',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'i',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'o',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'p',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '´',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '+',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Enter',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'CapsLock',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'a',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 's',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'd',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'f',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'g',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'h',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'j',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'k',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'l',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'ñ',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '{',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '}',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Shift',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '<',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'z',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'x',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'c',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'v',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'b',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'n',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'm',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: ',',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '.',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: '-',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'shift right',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Control',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'Alt',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: ' ',
  },
  {
    id: generate(),
    status: 'UNPRESSED',
    name: 'AltGraph',
  },

  {
    id: generate(),
    status: 'UNPRESSED',
    name: '____',
  },
]

export const KeyBoard = ({ keyPressed, keyWanted, keyBoardVisibility }) => {
  const [keys, setKeys] = useState(initialKeys)

  useEffect(() => {
    if (keyWanted === null) return null

    setKeys(
      keys.map((key) => {
        if (key.name === keyWanted.content) return { ...key, status: 'WANTED' }
        if (keyPressed) {
          if (keyPressed.content === key.name)
            return keyPressed.status === 'FAILED'
              ? { ...key, status: 'FAILED' }
              : { ...key, status: 'UNPRESSED' }
        }

        return { ...key, status: 'UNPRESSED' }
      })
    )
  }, [keyWanted])

  const getTypeKey = (id, name, status) => {
    switch (status) {
      case 'UNPRESSED':
        return <KeyStyled key={id}>{name}</KeyStyled>
      case 'FAILED':
        return <WrongPressedKey key={id}>{name}</WrongPressedKey>
      case 'WANTED':
        return <KeyPressedStyled key={id}>{name}</KeyPressedStyled>
    }
  }

  return (
    <KeyBoardStyled flex flex_dc flex_jc_c flex_ai_c>
      {keys.map(({ id, name, status }) => getTypeKey(id, name, status))}
    </KeyBoardStyled>
  )
}

const KeyBoardStyled = styled(Wrapper)`
  font-size: 12px;

  background: ${({ theme: { primaryColor } }) => primaryColor};
  ${({ theme: { tertiaryColor } }) => tertiaryColor};
  width: min-content;
  margin: 2em auto;

  display: grid;
  grid-template-columns: 5em repeat(12, 2em) 6em;
  grid-template-rows: repeat(5, 2em);
  border-radius: 1em;
  gap: 1em;
  padding: 1em;

  bottom: 10%;
`

const KeyStyled = styled.div`
  background: ${({ theme: { primaryColor } }) => primaryColor};

  width: 100%;
  height: 100%;

  border-radius: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(28) {
    grid-row: 2 / span 2;
    grid-column: -2 / -1;
  }

  &:nth-child(54) {
    grid-column: -3 / -1;
  }

  &:nth-child(57) {
    grid-column: 3 / span 7;
  }

  &:nth-child(58) {
    grid-column: 10 / span 2;
  }

  &:nth-child(59) {
    grid-column: 12 / -1;
  }
`

const KeyPressedStyled = styled(KeyStyled)`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: ${({ theme: { primaryColor } }) => primaryColor};
  font-weight: 600;
`

const glow = keyframes`
0%{
  box-shadow: 0 0 0 red;
}
100%{
  box-shadow: 0 0 20px red;
}


`

const WrongPressedKey = styled(KeyStyled)`
  background: ${({ theme: { errorColor } }) => errorColor};
  color: ${({ theme: { primaryColor } }) => primaryColor};
  opacity: 0.8;

  animation: ${glow} 1s ease forwards;
`
