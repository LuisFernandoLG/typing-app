import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import GroupInput from '../components/inputs/GroupInput'
import { ProfileImageInput } from '../components/inputs/ProfileImgInput'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { emailRegex, nickNameRegex } from '../constants/regexs'
import { useSession } from '../hooks/useSession'
// import { nickNameRegex } from '../constants/regexs'

export const ConfigProgilePage = () => {
  const [photo, setPhoto] = useState(null)
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm()

  const { user } = useSession()

  const hanldeOnImageChange = ({ name, value }) => {
    console.log('change')
    setPhoto(value)
  }

  const onSubmit = (data) => {
    console.log({ data })
    // const hanldeSubmitOwn = (data) =>
    // handleLogIn({ email: watch('Correo'), password: watch('Contraseña') })
  }

  useEffect(() => {
    setValue('Usuario', user.name)
    setValue('Correo', user.email)
    setValue('Contraseña', user.password)
  }, [])

  return (
    <Layout jc_c>
      <FormStyled
        as='form'
        fd_c
        jc_c
        ai_c
        gap='3rem'
        onSubmit={handleSubmit(onSubmit)}>
        <ProfileImageInput
          value={photo}
          name='photo'
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
          pd='1rem'>
          Guardar cambios
        </Button>
      </FormStyled>
    </Layout>
  )
}

const FormStyled = styled(FlexContainer)`
  width: 400px;
`

const Layout = styled(FlexContainer)`
  width: 100%;
  margin: 0 auto;
`
