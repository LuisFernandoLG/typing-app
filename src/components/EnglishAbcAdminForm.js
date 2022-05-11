import { useForm } from 'react-hook-form'
import { Button } from 'style-components'
import styled from 'styled-components'
import GroupInput from './inputs/GroupInput'
import { FlexContainer } from './shareStyleComponents/FlexContainer'

export const EnglishAbcAdminForm = ({ item }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  //   Andaba asignando esto
  const handleWholeSubmit = () => {
    setValue('titulo', item.title)
  }

  return <Form onSubmit={handleSubmit(handleWholeSubmit)} fd_c gap="2rem">
    {/* <h3>Titulo</h3> */}
    <GroupInput
      name='titulo'
      type='text'
      // regex={nickNameRegex}
      isRequired={true}
      register={register}
      errors={errors}
      maxLength={30}
    />
    {/* <input value={item.title}/> */}

    {/* <h4>Question</h4> */}
    <GroupInput
      name='pregunta'
      type='text'
      // regex={nickNameRegex}
      isRequired={true}
      register={register}
      errors={errors}
      maxLength={30}
    />

    <h4>Opciones</h4>

<Answer className={ item.answers[0].isCorrect ? 'yes' : 'no' }>
<GroupInput
      name='answer1'
      type='text'
      // regex={nickNameRegex}
      isRequired={true}
      register={register}
      errors={errors}
      maxLength={30}
      />
</Answer>

<Answer className={ item.answers[1].isCorrect ? 'yes' : 'no' }>
<GroupInput
      name='answer2'
      type='text'
      // regex={nickNameRegex}
      isRequired={true}
      register={register}
      errors={errors}
      maxLength={30}
      />
</Answer>

<Answer className={ item.answers[2].isCorrect ? 'yes' : 'no' }>
<GroupInput
      name='answer3'
      type='text'
      // regex={nickNameRegex}
      isRequired={true}
      register={register}
      errors={errors}
      maxLength={30}
      />
</Answer>

    {/* </FlexContainer> */}

    <Button
            primary={true}
            isLoading={false}
            type='submit'
            as='input'
            value='Buscar'
            pd='1rem 2rem'>
            Guardar
          </Button>
  </Form>
}

const Form = styled(FlexContainer)`
padding:2rem 0;
`

const Answer = styled.div`
padding: 1rem;
border-radius: 10px;
&.yes {
    background: ${({ theme: { successColor } }) => successColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &.no {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`
