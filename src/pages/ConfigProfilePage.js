import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import GroupInput from '../components/inputs/GroupInput'
import { ProfileImageInput } from '../components/inputs/ProfileImgInput'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { BackPageButton } from '../components/ui/BackPageButton'
import { Button } from '../components/ui/Button'
import { defaultImgUser } from '../constants/defaultImgUser'
import { emailRegex, nickNameRegex } from '../constants/regexs'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import api from '../services/api'

export const ConfigProgilePage = () => {
  const { user, handleLogIn } = useSession()
  const [photo, setPhoto] = useState(user?.imageProfile || defaultImgUser)
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setPhoto(user.imageProfile || defaultImgUser)
  }, [user])

  const hanldeOnImageChange = ({ name, value }) => {
    setPhoto(value)
  }

  const formatForJson = ({ data }) => {
    return {
      userName: data.Usuario,
      email: data.Correo,
      password: data.Contraseña,
      imageProfile: photo
    }
  }

  const onSubmit = async (data) => {
    setIsLoading(true)
    const userDatFormated = formatForJson({ data })
    await api().updateUser({ user: userDatFormated }).then((data) => {
      toast.success('Actualizado')
      handleLogIn({ email: userDatFormated.email, password: userDatFormated.password })
    }).catch((error) => {
      toast.error('Ups! Hubo un error')
      console.log({ error })
    })
    setIsLoading(false)
  }

  useEffect(() => {
    setValue('Usuario', user.name)
    setValue('Correo', user.email)
    setValue('Contraseña', user.password)
  }, [])

  return (
    <Layout>
      <FlexContainer jc_fs ai_fs>
        <BackPageButton />
      </FlexContainer>
      <FlexContainer jc_c ai_c>
        <FormStyled
          as='form'
          fd_c
          jc_c
          ai_c
          gap='3rem'
          onSubmit={handleSubmit(onSubmit)}>
          <ProfileImageInput
            value={photo}
            name='imageProfile'
            placeHolder='Ingresar foto'
            handleChangeFiles={hanldeOnImageChange}
          />
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
            maxLength={50}
            disabled={true}
          />

          <GroupInput
            name='Contraseña'
            type='password'
            isRequired={true}
            register={register}
            errors={errors}
            maxLength={30}
          />

          <Button
            type='submit'
            as='input'
            value='Iniciar sesión'
            primary={true}
            pd='1rem'
            isLoading={isLoading}>
            Guardar cambios
          </Button>
        </FormStyled>
      </FlexContainer>
    </Layout>
  )
}

const FormStyled = styled(FlexContainer)`
  width: 400px;
`
