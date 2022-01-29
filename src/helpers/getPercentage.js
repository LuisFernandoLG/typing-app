export const getPercentage = ({ percentage, maxPoints }) => {
  return Math.trunc((percentage * maxPoints) / 100)
}
