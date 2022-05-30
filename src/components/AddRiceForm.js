import { useForm } from 'react-hook-form'
import { useState } from 'react'
import api from '../services/api'
import { toast } from 'react-toastify'
import GroupInput from './inputs/GroupInput'
import { SelectInput } from './inputs/SelectInputStyle'
import { difficulties } from '../constants/difficulties'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import styled from 'styled-components'
import { TwitterPicker } from 'react-color'
import { Button } from './ui/Button'
import { Layout } from '../layouts/Layout'

export const AddRiceForm = ({ updateView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState({ hex: '#0693E3' })

  const handleColorChange = (color, event) => {
    setColor(color)
    console.log({ color })
  }

  const handleWholeSubmit = (form) => {
    setIsLoading(true)
    const formFormated = format_data(form)
    console.log({ formFormated })

    api()
      .addRice({ riceExercise: formFormated })
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
      title: form.Titulo,
      description: form.Contenido,
      difficultyId: parseInt(form.Dificultad),
      status: form.status ? 1 : 2,
      neckColor: color.hex
    }
  }

  return (
    <Card>
      <Title>Carrera</Title>
      <Circle color={color.hex} />
      <Form as='form' onSubmit={handleSubmit(handleWholeSubmit)} gap='2rem'>
          <Layout width='30vw'>
        <FlexContainer fd_c gap='3.5rem'>
            <GroupInput
              name='Titulo'
              type='text'
              isRequired={true}
              register={register}
              errors={errors}
              maxLength={60}
            />

            <GroupInput
              name='Contenido'
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
        </FlexContainer>
          </Layout>

        <FlexContainer fd_c gap='2rem'>
          <SelectInput {...register('Dificultad', { required: false })}>
            {difficulties.map(({ id, name, difficultyId }) => (
              <option key={`${id}_s`} value={difficultyId}>
                {name}
              </option>
            ))}
          </SelectInput>

          <FlexContainer fd_c gap='1rem'>
            {/* <div> */}
            <label>Collar del bot</label>
            <TwitterPicker color={color} onChange={handleColorChange} />
            {/* </div> */}
          </FlexContainer>

          <FlexContainer jc_c ai_c>
            <Button
              primary={true}
              isLoading={isLoading}
              type='submit'
              as='input'
              value='Añadir'
              pd='1rem 2rem'>
              Añadir
            </Button>
          </FlexContainer>
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
  position: relative;
  overflow: hidden;

  margin: 1rem 0;
`

const Form = styled(FlexContainer)`
  padding: 2rem 1rem;
  accent-color: ${({ theme: { primaryColor } }) => primaryColor};
  z-index: 30;
  .checkbox-label {
    color: ${({ theme: { fontColor } }) => fontColor};
    font-weight: 600;
    padding: 0 0.5rem 0 0;
  }

  label,
  select {
    color: ${({ theme: { fontColor } }) => fontColor};
    text-align: center;
  }

  input[type='checkbox'] {
    padding: 10px;
  }
`

const Title = styled.h3`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
`
const Circle = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${({ color }) => color};
  width: 100%;
  height: 10%;
  opacity: 0.5;
  z-index: 0;
  /* border-radius: 10rem; */
`
