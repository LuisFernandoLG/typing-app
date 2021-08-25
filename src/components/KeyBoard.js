import styled, { keyframes } from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const KeyBoard = ({ keys, keyPressed, keyWanted, wrongKeyPressed }) => {
  const getTypeKey = (id, name) => {
    if (keyWanted.key === name)
      return <KeyPressedStyled key={id}>{name}</KeyPressedStyled>;
    if (!keyPressed) return <KeyStyled key={id}>{name}</KeyStyled>;
    if (wrongKeyPressed === name)
      return <WrongPressedKey key={id}>{name}</WrongPressedKey>;

    return <KeyStyled key={id}>{name}</KeyStyled>;
  };

  return (
    <KeyBoardStyled flex flex_dc flex_jc_c flex_ai_c>
      {keys.map(({ id, name }) => getTypeKey(id, name))}
    </KeyBoardStyled>
  );
};

const KeyBoardStyled = styled(Wrapper)`
  padding: 1rem;
  height: 40vh;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};

  display: grid;
  grid-template-columns: 5rem repeat(12, 2rem) 6rem;
  grid-template-rows: repeat(5, 2rem);
  gap: 1rem;
`;

const KeyStyled = styled.div`
  background: ${({ theme: { disableColor } }) => disableColor};
  width: 100%;
  height: 100%;

  border-radius: 1rem;

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
`;

const KeyPressedStyled = styled(KeyStyled)`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
  font-weight: 600;
`;

const glow = keyframes`
0%{
  box-shadow: 0 0 0 red;
}
100%{
  box-shadow: 0 0 20px red;
}


`;

const WrongPressedKey = styled(KeyStyled)`
  background: ${({ theme: { errorColor } }) => errorColor};
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
  opacity: 0.8;

  animation: ${glow} 1s ease forwards;
`;
