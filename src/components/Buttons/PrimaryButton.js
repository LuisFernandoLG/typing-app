import styled from 'styled-components'
import { ButtonStyled } from '../shareStyleComponents/ButtonStyled'

const PrimaryButton = ({ handleClick, children }) => {
  return (
    <PrimaryButtonStyled onClick={handleClick}>{children}</PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled(ButtonStyled)``

export { PrimaryButton }
