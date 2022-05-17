import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../services/api'
import GroupInput from './inputs/GroupInput'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Button } from './ui/Button'

export const MecaExerciseForm = ({ mecaExercise }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  console.log({ mecaExercise })

  const [isLoading, setIsLoading] = useState(false)

  const handleWholeSubmit = (form) => {
    setIsLoading(true)
    console.log({ form })
    const formFormated = format_data(form)
    api().updateMecaExercise({ mecaExercise: formFormated }).then((data) => {
      console.log(data)
      toast.success('¡Actualizado!')
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const format_data = (form) => {
    return {
      mecaId: mecaExercise.id,
      title: form.Titulo,
      textContent: form.Contenido,
      status: form.status ? 1 : 2
    }
  }

  useEffect(() => {
    setValue('Titulo', mecaExercise.title)
    setValue('Contenido', mecaExercise.textContent)
  }, [])

  return (
    <MecaExerciseFormStyled
      as='form'
      onSubmit={handleSubmit(handleWholeSubmit)}
      fd_c
      gap='2rem'>
      {/* <h3>Titulo</h3> */}
      <GroupInput
        name='Titulo'
        type='text'
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={30}
      />

      <GroupInput
        name='Contenido'
        type='text'
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={30}
      />

<div>
      <label className='checkbox-label'>Activo</label>
      <input {...register('status', { required: false })} type="checkbox" defaultChecked={mecaExercise.status === 1}/>
</div>

      <Button
        primary={true}
        isLoading={isLoading}
        type='submit'
        as='input'
        value='Buscar'
        pd='1rem 2rem'>
        Guardar
      </Button>
    </MecaExerciseFormStyled>

  )
}

const MecaExerciseFormStyled = styled(FlexContainer)`
  accent-color: ${({ theme: { primaryColor } }) => primaryColor};
  .checkbox-label{
    color: ${({ theme: { fontColor } }) => fontColor};
    font-weight: 600;
    padding: 0 0.5rem 0 0;
  }

  input[type='checkbox'] {
    padding: 10px;
  }
`
