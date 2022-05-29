import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from './services/api'
import GroupInput from './components/inputs/GroupInput'
import { Button } from './components/ui/Button'
import { FlexContainer } from './components/shareStyleComponents/FlexContainer'
import { difficulties } from './constants/difficulties'
import { SelectInput } from './components/inputs/SelectInputStyle'

export const EditCourseForm = ({ course }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  console.log({ course })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setValue('Titulo', course.title)
    setValue('Descripción', course.description)
  }, [])

  const handleWholeSubmit = (form) => {
    setIsLoading(true)
    const formFormated = format_data(form)
    console.log({ formFormated })
    api()
      .updateCourse({ course: formFormated })
      .then((data) => {
        toast.success('¡Actualizado!')
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
      id: course.courseId,
      name: form.Titulo,
      description: form.Descripción,
      courseType: 2,
      status: form.status ? 1 : 2,
      difficultyId: form.Dificultad
    }
  }

  return (
    <Card>
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
          maxLength={30}
        />

        <div>
          <label className='checkbox-label'>Activo</label>
          <input
            {...register('status', { required: false })}
            type='checkbox'
            defaultChecked={course.statusId === 1}
          />
        </div>

        <SelectInput {...register('Dificultad')}>
          {difficulties.map(({ id, name, difficultyId }) => (
            <option
              key={`${id}_s`}
              value={difficultyId}
              selected={parseInt(course.difficultyId) === difficultyId}>
              {name}
            </option>
          ))}
        </SelectInput>

        <FlexContainer jc_c ai_c>
          <Button
            success={true}
            isLoading={isLoading}
            type='submit'
            as='input'
            value='Añadir'
            pd='1rem 2rem'>
            Guardar
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

  /* margin: 1rem 0; */
`

const Form = styled(FlexContainer)`
  padding: 2rem 1rem 0 1rem;
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
