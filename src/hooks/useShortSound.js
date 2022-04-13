export const useShortSound = ({ soundPath }) => {
  const audio = new Audio(soundPath)

  const play = () => audio.play()
  return [play]
}
