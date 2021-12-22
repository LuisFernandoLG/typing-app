import { useEffect, useState } from "react";

const initialIsEnableSound = JSON.parse(localStorage.getItem("isEnableSound"));
const initialKeyBoardVisibility = JSON.parse(
  localStorage.getItem("keyBoardVisibility")
);

export const useToggleKeyBoardButtons = () => {
  const [isEnableSound, setIsEnableSound] = useState(initialIsEnableSound);
  const [keyBoardVisibility, setKeyBoardVisibility] = useState(
    initialKeyBoardVisibility
  );

  const enableSound = () => setIsEnableSound(true);
  const disableSound = () => setIsEnableSound(false);
  const enableKeyboard = () => setKeyBoardVisibility(true);
  const disableKeyBoard = () => setKeyBoardVisibility(false);

  useEffect(() => {
    localStorage.setItem("isEnableSound", JSON.stringify(isEnableSound));
    localStorage.setItem(
      "keyBoardVisibility",
      JSON.stringify(keyBoardVisibility)
    );
  }, [isEnableSound, keyBoardVisibility]);

  return {
    isEnableSound,
    enableSound,
    disableSound,
    keyBoardVisibility,
    enableKeyboard,
    disableKeyBoard,
  };
};
