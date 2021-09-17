import { useEffect } from "react";

export const useEffectKeySounds = (keyPressed, isEnableSound) => {
  useEffect(() => {
    if (isEnableSound) if (keyPressed) playSound(keyPressed.status);
  }, [keyPressed]);

  const playSound = (status) => {
    if (status === "SUCCEED") playSuccessSound();
    if (status === "FAILED") playFailedSound();
  };

  const playSuccessSound = () => {
    let sound = new Audio("six.mp3");
    sound.play();
  };

  const playFailedSound = () => {
    let sound = new Audio("fail.mp3");
    sound.play();
  };

  return {};
};
