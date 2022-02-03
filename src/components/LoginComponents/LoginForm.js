import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import GroupInput from '../inputs/GroupInput'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { Button } from '../ui/Button'
import { useSession } from '../../hooks/useSession'
import { emailRegex } from '../../constants/regexs'

export const LoginForm = () => {
  const { handleLogIn, authLoading } = useSession()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const hanldeSubmitOwn = (data) =>
    handleLogIn({ email: watch('Correo'), password: watch('Contraseña') })

  return (
    <LoginFormContainer
      as='form'
      flex
      flex_dc
      flex_ai_c
      gap='3rem'
      onSubmit={handleSubmit(hanldeSubmitOwn)}>
      <Title>Inicio de sesión</Title>

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
        isLoading={authLoading}
        type='submit'
        as='input'
        value='Iniciar sesión'
        pd="1rem 2rem">

        Iniciar sesión
      </Button>
    </LoginFormContainer>
  )
}

const LoginFormContainer = styled(Wrapper)`
  max-width: 25rem;
  width: 30rem;
`

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};
`
