import { useEffect } from 'react'

export const useEffectKeySounds = (keyPressed, isEnableSound) => {
  useEffect(() => {
    if (isEnableSound) if (keyPressed) playSound(keyPressed.status)
  }, [keyPressed])

  const playSound = (status) => {
    if (status === 'SUCCEED') playSuccessSound()
    if (status === 'FAILED') playFailedSound()
  }

  const playSuccessSound = () => {
    const sound = new Audio('six.mp3')
    sound.play()
  }

  const playFailedSound = () => {
    const sound = new Audio('fail.mp3')
    sound.play()
  }

  return {}
}
