import { useState } from 'react'

export const useToggle = ({ init }) => {
  const [isActive, setIsActive] = useState(init !== null ? init : false)

  const toggleState = () => setIsActive(!isActive)

  return [isActive, toggleState]
}
