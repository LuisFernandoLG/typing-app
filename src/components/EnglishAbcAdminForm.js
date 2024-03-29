import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../services/api'
import GroupInput from './inputs/GroupInput'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Button } from './ui/Button'

export const EnglishAbcAdminForm = ({ item }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const handleWholeSubmit = (form) => {
    setIsLoading(true)

    const formFormated = format_data({ form })
    api()
      .updateAbcExercise({ abcExercise: formFormated })
      .then((data) => {
        console.log(data)
        toast.success('¡Actualizado!')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const format_data = ({ form }) => {
    return {
      idQuestion: item.id,
      title: form.Titulo,
      question: form.Pregunta,
      correctAnswer: form['Respuesta 1'],
      secondAnswer: form['Respuesta 2'],
      tirthAnswer: form['Respuesta 3'],
      status: form.status ? 1 : 2
    }
  }

  useEffect(() => {
    setValue('Titulo', item.title)
    setValue('Pregunta', item.question)
    setValue('Respuesta 1', item.answers[0].content)
    setValue('Respuesta 2', item.answers[1].content)
    setValue('Respuesta 3', item.answers[2].content)
  }, [])

  console.log({ item })

  return (
    <Form as='form' onSubmit={handleSubmit(handleWholeSubmit)} fd_c gap='3rem'>
      <GroupInput
        name='Titulo'
        type='text'
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={60}
      />

      <GroupInput
        name='Pregunta'
        type='text'
        // regex={nickNameRegex}
        isRequired={true}
        register={register}
        errors={errors}
        maxLength={60}
      />

      <Answer className={item.answers[0].isCorrect ? 'yes' : 'no'}>
        <GroupInput
          name='Respuesta 1'
          type='text'
          // regex={nickNameRegex}
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={60}
        />
      </Answer>

      <Answer className={item.answers[1].isCorrect ? 'yes' : 'no'}>
        <GroupInput
          name='Respuesta 2'
          type='text'
          // regex={nickNameRegex}
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={60}
        />
      </Answer>

      <Answer className={item.answers[2].isCorrect ? 'yes' : 'no'}>
        <GroupInput
          name='Respuesta 3'
          type='text'
          // regex={nickNameRegex}
          isRequired={true}
          register={register}
          errors={errors}
          maxLength={60}
        />
      </Answer>

      <div>
        <label className='checkbox-label'>Activo</label>
        <input
          {...register('status', { required: false })}
          type='checkbox'
          defaultChecked={item.idStatus === 1}
        />
      </div>
      <FlexContainer jc_c ai_c>
        <Button
          primary={true}
          isLoading={isLoading}
          type='submit'
          as='input'
          value='Buscar'
          pd='1rem 2rem'>
          Actualizar
        </Button>
      </FlexContainer>
    </Form>
  )
}

const Form = styled(FlexContainer)`
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

const Answer = styled.div`
  padding: 1rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  position: relative;

  &.yes::before,
  &.no::before {
    display: block;
    content: '';
    width: 5px;
    height: 50%;

    position: absolute;
    left: 2%;
    /* top:50%; */
    bottom: 30%;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  }

  &.yes::before {
    background: ${({ theme: { successColor } }) => successColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &.no::before {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`
