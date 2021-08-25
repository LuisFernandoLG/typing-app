import { useEffect, useState } from "react";
import { generate } from "shortid";
import { Howl, Howler } from "howler";
const initialKeys = [
  {
    id: generate(),
    name: "|",
  },
  {
    id: generate(),
    name: "1",
  },
  {
    id: generate(),
    name: "2",
  },
  {
    id: generate(),
    name: "3",
  },

  {
    id: generate(),
    name: "4",
  },

  {
    id: generate(),
    name: "5",
  },

  {
    id: generate(),
    name: "6",
  },

  {
    id: generate(),
    name: "7",
  },

  {
    id: generate(),
    name: "8",
  },

  {
    id: generate(),
    name: "9",
  },
  {
    id: generate(),
    name: "0",
  },

  {
    id: generate(),
    name: "?",
  },

  {
    id: generate(),
    name: "¿",
  },

  {
    id: generate(),
    name: "Backspace",
  },

  {
    id: generate(),
    name: "Tab",
  },

  {
    id: generate(),
    name: "q",
  },

  {
    id: generate(),
    name: "w",
  },

  {
    id: generate(),
    name: "e",
  },

  {
    id: generate(),
    name: "r",
  },

  {
    id: generate(),
    name: "t",
  },

  {
    id: generate(),
    name: "y",
  },

  {
    id: generate(),
    name: "u",
  },

  {
    id: generate(),
    name: "i",
  },

  {
    id: generate(),
    name: "o",
  },

  {
    id: generate(),
    name: "p",
  },
  {
    id: generate(),
    name: "´",
  },
  {
    id: generate(),
    name: "+",
  },
  {
    id: generate(),
    name: "Enter",
  },
  {
    id: generate(),
    name: "CapsLock",
  },

  {
    id: generate(),
    name: "a",
  },

  {
    id: generate(),
    name: "s",
  },

  {
    id: generate(),
    name: "d",
  },

  {
    id: generate(),
    name: "f",
  },

  {
    id: generate(),
    name: "g",
  },

  {
    id: generate(),
    name: "h",
  },

  {
    id: generate(),
    name: "j",
  },

  {
    id: generate(),
    name: "k",
  },

  {
    id: generate(),
    name: "l",
  },

  {
    id: generate(),
    name: "ñ",
  },
  {
    id: generate(),
    name: "{",
  },
  {
    id: generate(),
    name: "}",
  },

  {
    id: generate(),
    name: "Shift",
  },

  {
    id: generate(),
    name: "<",
  },

  {
    id: generate(),
    name: "z",
  },

  {
    id: generate(),
    name: "x",
  },

  {
    id: generate(),
    name: "c",
  },

  {
    id: generate(),
    name: "v",
  },
  {
    id: generate(),
    name: "b",
  },

  {
    id: generate(),
    name: "n",
  },

  {
    id: generate(),
    name: "m",
  },

  {
    id: generate(),
    name: ",",
  },

  {
    id: generate(),
    name: ".",
  },
  {
    id: generate(),
    name: "-",
  },
  {
    id: generate(),
    name: "shift right",
  },
  {
    id: generate(),
    name: "Control",
  },
  {
    id: generate(),
    name: "Alt",
  },
  {
    id: generate(),
    name: " ",
  },
  {
    id: generate(),
    name: "AltGraph",
  },

  {
    id: generate(),
    name: "____",
  },
];

const audios = [
  // "one.mp3",
  // "two.mp3",
  // "three.mp3",
  // "four.mp3",
  // "five.mp3",
  "six.mp3",
];

const text = "como descargar minecraft en pc";
const initialQuote = text.split("").map((letter) => ({
  id: generate(),
  key: letter,
  visited: 0,
  succeed: null,
}));

const initialIndexQuote = 0;

export const useKeyBoard = () => {
  const [keys, setKeys] = useState(initialKeys);
  const [keyPressed, setKeyPressed] = useState(null);
  const [wrongKeyPressed, setWrongKeyPressed] = useState(null);
  const [quote, setQuote] = useState(initialQuote);
  const [indexQuote, setIndexQuote] = useState(initialIndexQuote);

  const setSucceedKey = () => {
    const keyItem = quote[indexQuote];
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: true,
    };
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    );

    setQuote(quoteCopy);
  };

  const setNotSuceedKey = () => {
    const keyItem = quote[indexQuote];
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: false,
    };
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    );

    setQuote(quoteCopy);
  };

  const setRetypeKey = () => {
    const keyItem = quote[indexQuote];
    const succeedStatus = {
      ...keyItem,
      visited: keyItem.visited + 1,
      succeed: null,
    };
    const quoteCopy = quote.map((item) =>
      item.id === keyItem.id ? succeedStatus : item
    );

    setQuote(quoteCopy);
  };

  const addKeyPressed = (e) => {
    setKeyPressed({
      id: generate(),
      key: e.key,
    });
  };

  const goNextIndexQuote = () => {
    if (quote.length - 1 === indexQuote) {
      setQuote(initialQuote);
      setIndexQuote(initialIndexQuote);
    } else setIndexQuote(indexQuote + 1);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => addKeyPressed(e));
    return () => window.removeEventListener("keydown", () => {});
  }, []);

  useEffect(() => {
    if (!keyPressed) return;

    if (keyPressed.key === "Backspace" && indexQuote > 0) {
      setWrongKeyPressed(null);
      setRetypeKey();
      return setIndexQuote(indexQuote - 1);
    }

    if (keyPressed.key === quote[indexQuote].key) {
      playAudioEffect();
      setWrongKeyPressed(null);
      setSucceedKey();
      goNextIndexQuote();
    } else {
      playErrorSound();
      setNotSuceedKey();
      goNextIndexQuote();
      setWrongKeyPressed(keyPressed.key);
    }
  }, [keyPressed]);

  const playErrorSound = () => {
    let audio = "fail.wav";
    var sound = new Howl({
      src: [audio],
    });
    sound.play();
  };

  const getRandomSound = () => {
    const minimum = 0;
    const maximum = audios.length - 1;
    let index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return audios[index];
  };

  const playAudioEffect = () => {
    let audio = getRandomSound();
    var sound = new Howl({
      src: [audio],
    });
    sound.play();
  };

  return {
    keyPressed,
    keys,
    quote,
    indexQuote,
    wrongKeyPressed,
  };
};
