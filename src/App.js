import { ThemeProvider } from "styled-components";
import "normalize.css";
import { BubbleKey } from "./components/BubbleKey";
import { KeyBoard } from "./components/KeyBoard";
import { useKeyBoard } from "./hooks/useKeyBoard";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/GlobalStyles";
import { Quote } from "./components/Quote";

function App() {
  const {
    keys,
    keyPressed,
    addKeyPressed,
    indexQuote,
    quote,
    wrongKeyPressed,
  } = useKeyBoard();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Quote quote={quote} indexQuote={indexQuote} />
        <KeyBoard
          keyWanted={quote[indexQuote]}
          keys={keys}
          keyPressed={keyPressed}
          addKeyPressed={addKeyPressed}
          wrongKeyPressed={wrongKeyPressed}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
