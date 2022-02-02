import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { useSignInForm } from '../../hooks/useSignInForm'
import GroupInput from '../inputs/GroupInput'
import { Button } from '../ui/Button'

const nameRegex = /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/g
const emailRegex = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/

export const SignInForm = () => {
  const {
    authLoading,
    register,
    errors,
    handleSubmit,
    handleSubmitOwn,
    fecthLoading
  } = useSignInForm()

  return (
    <SignInWrapper
      as='form'
      flex
      flex_dc
      flex_ai_c
      gap='3rem'
      onSubmit={handleSubmit(handleSubmitOwn)}>
      <Title>Registro</Title>

      <GroupInput
        name='Usuario'
        type='text'
        regex={nameRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />

      <GroupInput
        name='Correo'
        regex={emailRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />

      <GroupInput
        name='Contraseña'
        type='password'
        isRequired={true}
        register={register}
        errors={errors}
      />

      <Button
        primary={true}
        isLoading={fecthLoading || authLoading}
        value='Registrarse'
        type='submit'
        pd="1rem 2rem">
        Registrarse
      </Button>
    </SignInWrapper>
  )
}

const SignInWrapper = styled(Wrapper)`
  max-width: 25rem;
  width: 30rem;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
