import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Quote = ({ quote, indexQuote }) => {
  return (
    <QuoteStyled flex flex_jc_c>
      {quote
        .split("")
        .map((item, i) =>
          i === indexQuote ? (
            <WantedKey>{item}</WantedKey>
          ) : (
            <NormalKey>{item === " " ? <SpaceKey /> : item}</NormalKey>
          )
        )}
    </QuoteStyled>
  );
};

const NormalKey = styled.span`
  margin: 0 0.5rem;
  font-size: 2rem;
`;

const WantedKey = styled(NormalKey)`
  padding: 0 0.2rem;
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  /* background: ${({ theme: { tertiaryColor } }) => tertiaryColor}; */
  text-decoration: underline;
`;

const QuoteStyled = styled(Wrapper)`
  padding: 1rem;
`;

const SpaceKey = styled(NormalKey)`
  margin: 0 0.5rem;
`;
