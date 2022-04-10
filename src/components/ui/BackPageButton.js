import { useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { Button } from './Button'

export const BackPageButton = ({ backRoute, text }) => {
  const route = backRoute || -1
  // eslint-disable-next-line no-unused-vars
  const [backPageRote, setBackPageRote] = useState(route)
  const navigate = useNavigate()

  const backPreviousPage = () => {
    navigate(backPageRote)
  }

  return (
      <Button secondary={true} onClick={backPreviousPage}>
        <FlexContainer gap='0.5rem' jc_c ai_c>
          <IoArrowBackOutline /> <span>{text || 'Regresar'}</span>
        </FlexContainer>
      </Button>
  )
}
