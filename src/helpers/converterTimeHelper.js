const getSecondsFormateIntoMinutes = (secondsTime) => {
  const minutes = Math.trunc(secondsTime / 60)
  const seconds = secondsTime - minutes * 60
  return { minutes, seconds }
}

const formatTime = (m, s) => {
  const xMin = m.toString().length === 1 ? `0${m}` : m
  const xSec = s.toString().length === 1 ? `0${s}` : s
  return `${xMin}:${xSec}`
}

const secondsToMinutes = (secondsTime) => {
  const { minutes, seconds } = getSecondsFormateIntoMinutes(secondsTime)
  return formatTime(minutes, seconds)
}

export { secondsToMinutes }
