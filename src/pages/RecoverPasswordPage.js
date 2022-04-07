import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import GroupInput from '../components/inputs/GroupInput'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { emailRegex } from '../constants/regexs'
import { Layout } from '../layouts/Layout'
import { IoDocuments } from 'react-icons/io5'
import { useState } from 'react'
import { useClipPath } from '../hooks/useClipPath'
import { toast } from 'react-toastify'

export const RecoverPasswordPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [recoPassword, setRecoPassword] = useState(null)
  const { copyToClipPath } = useClipPath()

  const copyPassword = () => {
    toast.success('Contraseña copiada')
    copyToClipPath({ content: recoPassword })
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleOnSubmit = (data) => {
    setRecoPassword('probandoAndo!')
  }
  return (
    <Layout width='500px' mg='0 auto'>
      <Title>Recupera tu contraseña</Title>
      <FormStyled
        fd_c
        ai_c
        jc_c
        as='form'
        gap='1rem'
        onSubmit={handleSubmit(handleOnSubmit)}>
        <GroupInput
          name='Correo'
          regex={emailRegex}
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={50}
        />
        <Button
          primary={true}
          isLoading={false}
          type='submit'
          as='input'
          value='Buscar'
          pd='1rem 2rem'>
          Buscar
        </Button>
      </FormStyled>
      {recoPassword && (
        <PasswordField pd='1rem' gap='1rem' jc_c>
          <span>{recoPassword}</span> <IoDocuments onClick={copyPassword} />{' '}
        </PasswordField>
      )}
    </Layout>
  )
}

const PasswordField = styled(FlexContainer)`
  margin: 0 auto;
  background: ${({ theme: { accentColor } }) => accentColor};
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 1.5rem;
  border-radius: 10px;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
`

const FormStyled = styled(FlexContainer)`
  margin: 5rem 0;
`
