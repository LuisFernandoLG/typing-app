import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import styled, { keyframes } from "styled-components";
import { useKeyBoardActivity } from "../hooks/useKeyBoardActivity";

export const Exercise = ({ q }) => {
  const { indexQuote, quote, keyWanted, keyPressed, isCompleted } =
    useKeyBoardActivity(q);

  if (isCompleted)
    return (
      <>
        <p>Felicidades</p>
        {/* <SuccessMessage results={results}>
          <h2>Resultados</h2>
          <p className="errors">
            <span>Errors: {results.errors}</span>
          </p>
          <p className="succeed">
            <span>Succeed: {results.succeed}</span>
          </p>
        </SuccessMessage> */}
      </>
    );

  return (
    <>
      <h2>IndexQuote:{indexQuote}</h2>
      {quote ? (
        <>
          <Quote quote={quote} indexQuote={indexQuote} />
          {keyWanted !== null ? (
            <KeyBoard keyWanted={keyWanted} keyPressed={keyPressed} />
          ) : null}
        </>
      ) : null}
    </>
  );
};

const showAnimation = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;

}
`;
const SuccessMessage = styled.div`
  padding: 1rem;

  animation: ${showAnimation} 1s ease;

  .errors,
  .succeed {
    background: gray;
    position: relative;
    display: inline-block;
    padding: 2rem;

    font-weight: 700;
    margin: 0 1rem;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: 50;
      opacity: 0.3;
    }
  }

  .errors {
    span {
      color: ${({ theme: { secondaryColor } }) => secondaryColor};
    }

    &::after {
      height: ${({ results }) => (results.errors * 100) / results.total}%;
      background: red;
    }
  }

  .succeed {
    span {
      color: ${({ theme: { secondaryColor } }) => secondaryColor};
    }

    &::after {
      height: ${({ results }) => (results.succeed * 100) / results.total}%;
      background: green;
    }
  }
`;
