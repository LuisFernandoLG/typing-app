import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import GroupInput from './components/inputs/GroupInput'
import { FlexContainer } from './components/shareStyleComponents/FlexContainer'
import { Button } from './components/ui/Button'
import api from './services/api'

export const AddCourseForm = ({ updateView }) => {
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
      .addCourse({ course: formFormated })
      .then((data) => {
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
      id: 9999,
      name: form.Titulo,
      description: form.Descripción,
      courseType: 2,
      status: form.status ? 1 : 2
    }
  }

  return (
    <Card>
      <Title>Curso</Title>
      <Form
        as='form'
        onSubmit={handleSubmit(handleWholeSubmit)}
        fd_c
        gap='3rem'>
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
          name='Descripción'
          type='text'
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={50}
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
            value='Añadir'
            pd='1rem 2rem'>
            Añadir
          </Button>
        </FlexContainer>
      </Form>
    </Card>
  )
}

const Card = styled.div`
  padding: 3rem 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  transition: background-image 300ms ease;

  margin: 1rem 0;
`

const Form = styled(FlexContainer)`
  padding: 2rem 1rem;
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
