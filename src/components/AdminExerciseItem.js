import { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const AdminExerciseItem = ({
  adminExercise,
  categories,
  difficulties,
  statuses,
  updateExercise,
}) => {
  const [form, setForm] = useState(adminExercise);

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = () => {
    const dataToUpdate = {
      id: form.id,
      title: form.title,
      points: form.points,
      text_content: form.textContent,
      time: form.time,
      status: parseInt(form.idStatus),
      category: parseInt(form.idCategory),
      difficulty: parseInt(form.idDifficulty),
    };
    updateExercise(form.id, dataToUpdate);
    // console.log("onBlur!!!");
  };

  return (
    <AdminExerciseItemWrapper as="form" flex wrap flex_dc onBlur={handleBlur}>
      <Id>#{form.id}</Id>

      <Wrapper flex flex_dc>
        <label>Titulo</label>
        <input name="title" value={form.title} onChange={handleChangeForm} />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Contenido</label>
        <textarea
          name="textContent"
          type="text"
          value={form.textContent}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Puntos</label>
        <input
          name="points"
          type="number"
          value={form.points}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Tiempo</label>
        <input
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
          <option
            key={`${id}_s`}
            value={id}
            value={id}
            selected={form.idStatus === id}
          >
            {name}
          </option>
        ))}
      </select>

      {/* <button>Borrar</button> */}
    </AdminExerciseItemWrapper>
  );
};

const AdminExerciseItemWrapper = styled(Wrapper)`
  width: 70%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1rem;

  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};

  div,
  select {
    margin: 0.8rem 0;
  }

  label {
    font-size: 1.2rem;
    margin: 0.3125rem 0;
    font-weight: 600;
  }

  button {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    padding: 0.5rem;
  }
`;

const Id = styled.h2``;
