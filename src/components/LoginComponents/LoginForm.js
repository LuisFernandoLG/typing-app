import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import GroupInput from '../inputs/GroupInput'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { Button } from '../ui/Button'
import { useSession } from '../../hooks/useSession'

const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/

export const LoginForm = () => {
  const { handleLogIn, authLoading } = useSession()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
        value='Iniciar sesión'>
        Iniciar sesión
      </Button>
    </LoginFormContainer>
  )
}

const LoginFormContainer = styled(Wrapper)`
  padding: 3rem 2rem;
  width: 30rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  border-radius: ${({ theme: { border_radius } }) => border_radius};
`

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`
