import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { useSignInForm } from '../../hooks/useSignInForm'
import GroupInput from '../inputs/GroupInput'
import { Button } from '../ui/Button'
import { emailRegex, nickNameRegex } from '../../constants/regexs'

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
        regex={nickNameRegex}
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={20}
      />

      <GroupInput
        name='Correo'
        regex={emailRegex}
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={30}
      />

      <GroupInput
        name='Contraseña'
        type='password'
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={15}
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