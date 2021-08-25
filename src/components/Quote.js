import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Quote = ({ quote, indexQuote }) => {
  const getTypeKey = () => {
    return quote.map((item) => {
      if (item.id === quote[indexQuote].id)
        return <WantedKey key={item.id}>{item.key}</WantedKey>;

      if (item.succeed === null)
        return <NormalKey key={item.id}>{item.key}</NormalKey>;

      if (item.succeed) {
        if (item.visited === 1)
          return <SucceedKey key={item.id}>{item.key}</SucceedKey>;
        else return <CorrectedKey key={item.id}>{item.key}</CorrectedKey>;
      } else return <WrongKey key={item.id}>{item.key}</WrongKey>;
    });
  };

  return (
    <QuoteStyled flex flex_jc_c>
      {getTypeKey()}
      {/* <h2>Hi</h2> */}
    </QuoteStyled>
  );
};

const NormalKey = styled.span`
  margin: 1rem 0.5rem;
  font-size: 2rem;
  padding: 0.2rem 0.5rem;
  transition: color 0.5s ease;

  /* color: ${({ theme: { disableColor } }) => disableColor}; */
  color: gray;
`;

const WantedKey = styled(NormalKey)`
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  outline: 3px solid ${({ theme: { tertiaryColor } }) => tertiaryColor};
  background: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`;

const WrongKey = styled(NormalKey)`
  background: ${({ theme: { errorColor } }) => errorColor};
`;

const CorrectedKey = styled(NormalKey)`
  background: ${({ theme: { correctedColor } }) => correctedColor};
`;

const SucceedKey = styled(NormalKey)`
  background: ${({ theme: { successColor } }) => successColor};
`;

const QuoteStyled = styled(Wrapper)`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
