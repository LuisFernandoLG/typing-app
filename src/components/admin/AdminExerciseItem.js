import { useState } from 'react'
import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const AdminExerciseItem = ({
  adminExercise,
  categories,
  difficulties,
  statuses,
  updateExercise
}) => {
  const [form, setForm] = useState(adminExercise)

  const handleChangeForm = (e) => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataToUpdate = {
      id: form.id,
      title: form.title,
      points: form.points,
      text_content: form.textContent,
      time: form.time,
      status: parseInt(form.idStatus),
      category: parseInt(form.idCategory),
      difficulty: parseInt(form.idDifficulty)
    }
    updateExercise(form.id, dataToUpdate)
  }

  return (
    <AdminExerciseItemWrapper
      as="form"
      flex
      wrap="true"
      flex_dc
      onSubmit={handleSubmit}
    >
      <Id>#{form.id}</Id>

      <Wrapper flex flex_dc>
        <label>Titulo</label>
        <input
          required
          name="title"
          value={form.title}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Contenido</label>
        <textarea
          required
          name="textContent"
          type="text"
          value={form.textContent}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Puntos</label>
        <input
          required
          name="points"
          type="number"
          value={form.points}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Tiempo</label>
        <input
          required
          name="time"
          type="number"
          value={form.time}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <select name="idCategory" onChange={handleChangeForm}>
        {categories.map(({ id, name }) => (
          <option key={`${id}_c`} value={id} selected={form.idCategory === id}>
            {name}
          </option>
        ))}
      </select>

      <select name="idDifficulty" onChange={handleChangeForm}>
        {difficulties.map(({ id, name }) => (
          <option
            key={`${id}_d`}
            value={id}
            selected={form.idDifficulty === id}
          >
            {name}
          </option>
        ))}
      </select>

      <select name="idStatus" onChange={handleChangeForm}>
        {statuses.map(({ id, name }) => (
          <option key={`${id}_s`} value={id} selected={form.idStatus === id}>
            {name}
          </option>
        ))}
      </select>

      <Submit type="submit" value="Guardar" />
    </AdminExerciseItemWrapper>
  )
}

const AdminExerciseItemWrapper = styled(Wrapper)`

  padding: 1em 2em;
  border-radius: 1em;

  /* box-shadow: 0 0 20px -10px ${({ theme: { tertiaryColor } }) => tertiaryColor}; */
  background:${({ theme: { accentColor } }) => accentColor};
  color:${({ theme: { fontColor } }) => fontColor};

  div,
  select {
    margin: 0.8em 0;
  }

  label {
    font-size: 1.2em;
    margin: 0.3125rem 0;
    font-weight: 600;
  }

  input, select, textarea{
    padding:0.5rem;
    border-radius:${({ theme: { borderRadius } }) => borderRadius};
    border: 1px solid ${({ theme: { fontColor } }) => fontColor};

  }

  button {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    padding: 0.5em;
  }
`

const Submit = styled.input`
  width: min-content;
  padding: 1em;
  background: ${({ theme: { successColor } }) => successColor};

  border: none;
  outline: none;
  border-radius: 1em;
  cursor: pointer;
`

const Id = styled.h2``
