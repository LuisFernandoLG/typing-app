import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { endpoints } from '../components/signIn/api'
import AuthContext from '../contexts/AuthContext'
import { useFetch } from './useFetch'

export const useSignInForm = () => {
  const { fetchData, fetchErrors, data, loading: fecthLoading } = useFetch()
  const { setLogIn, authLoading } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const handleSubmitOwn = (data) => {
    const formatedForm = formatFormForApi(data)
    const options = {
      method: 'POST',
      body: JSON.stringify(formatedForm)
    }
    fetchData(endpoints.signIn, options)
  }

  const formatFormForApi = (data) => ({
    id: 0,
    name: data.Usuario,
    surname: 'apellido',
    second_surname: 'segundo apellido',
    email: data.Correo,
    password: data['Contraseña'],
    typeUser: 2
  })

  useEffect(() => {
    if (fetchErrors) {
      toast.error('Hubo un error!')
    }
  }, [fetchErrors])

  useEffect(() => {
    if (data) {
      if (data.status === 201) toast.error(data.statusText)
      if (data.status === 202) setLogIn(watch('Correo'), watch('Contraseña'))
      // console.log()
    }
  }, [data])
  return {
    authLoading,
    handleSubmitOwn,
    handleSubmit,
    fecthLoading,
    errors,
    register
  }
}
