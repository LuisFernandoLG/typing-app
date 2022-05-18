import styled from 'styled-components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
// import { Button } from 'style-components'
import api from '../services/api'
import GroupInput from './inputs/GroupInput'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Button } from './ui/Button'

export const AddMecaExerciseForm = ({ courseId, updateView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const [isLoading, setIsLoading] = useState(false)

  const handleWholeSubmit = (form) => {
    setIsLoading(true)
    console.log({ form })
    const formFormated = format_data(form)
    api()
      .addMecaExercise({ mecaExercise: formFormated, courseId })
      .then((data) => {
        // console.log(data)
        toast.success('¡Registrado!')
        updateView()
        reset()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const format_data = (form) => {
    return {
      mecaId: 9999,
      title: form.Titulo,
      textContent: form.Contenido,
      status: form.status ? 1 : 2
    }
  }

  return (
    <>
      <Title>Mecanografía</Title>
      <MecaExerciseFormStyled
        as='form'
        onSubmit={handleSubmit(handleWholeSubmit)}
        fd_c
        gap='3.2rem'>
        {/* <h3>Titulo</h3> */}
        <GroupInput
          name='Titulo'
          type='text'
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={70}
        />

        <GroupInput
          name='Contenido'
          type='text'
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={70}
        />

        <div>
          <label className='checkbox-label'>Activo</label>
          <input
            {...register('status', { required: false })}
            type='checkbox'
            defaultChecked={true}
          />
        </div>
        <FlexContainer jc_c ai_c>
          <Button
            success={true}
            isLoading={isLoading}
            type='submit'
            as='input'
            value='Buscar'
            pd='1rem 2rem'>
            Añadir
          </Button>
        </FlexContainer>
      </MecaExerciseFormStyled>
    </>
  )
}

const MecaExerciseFormStyled = styled(FlexContainer)`
  padding: 2rem 1rem;
  /* height:200px; */
  accent-color: ${({ theme: { primaryColor } }) => primaryColor};

  .checkbox-label {
    color: ${({ theme: { fontColor } }) => fontColor};
    font-weight: 600;
    padding: 0 0.5rem 0 0;
  }

  input[type='checkbox'] {
    padding: 10px;
  }
`

const Title = styled.h3`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
`
