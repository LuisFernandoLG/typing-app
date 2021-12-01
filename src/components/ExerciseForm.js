import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { Loader } from "./Loader";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { toast } from "react-toastify";

const initialExerForm = {
  title: "",
  text_content: "",
  points: 0,
  time: 30,
  category: null,
  status: null,
  difficulty: null,
};

// const titleRegex =

export const ExerciseForm = ({
  categories,
  difficulties,
  statuses,
  addExercise,
  exerLoadingAdded,
}) => {
  const [form, setForm] = useState(initialExerForm);
  const [formErrors, setFormErrors] = useState(null);

  useEffect(() => {
    console.log(form);

    if (form.title === "" || form.title === null) {
      setFormErrors("Titulo requerido");
    } else if (form.text_content === "" || form.text_content === null) {
      setFormErrors("Contenido requerido");
    } else if (form.points === "" || form.points === null) {
      setFormErrors("Puntos requerido");
    } else if (form.time === "" || form.time === null) {
      setFormErrors("Tiempo requerido");
    } else if (form.category === "" || form.category === null) {
      setFormErrors("Categoría requerida");
    } else if (form.difficulty === "" || form.difficulty === null) {
      setFormErrors("Dificultad requerida");
    } else if (form.status === "" || form.status === null) {
      setFormErrors("Status requerido");
    } else {
      setFormErrors(null);
    }
  }, [form]);

  useEffect(() => {}, [formErrors]);

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formErrors) toast.warn(formErrors);
    else addExercise(form);
  };

  if (exerLoadingAdded) return <Loader />;

  return (
    <ExerFormStyled as="form" flex flex_dc onSubmit={handleSubmit} wrap={true}>
      <Title>Nuevo ejercicio</Title>

      <Wrapper flex flex_dc>
        <label>Titulo</label>
        <input
          name="title"
          placeholder="titulo"
          type="text"
          value={form.title}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Contenido</label>
        <textarea
          placeholder="contenido"
          name="text_content"
          type="text"
          value={form.text_content}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Puntos</label>
        <input
          name="points"
          type="number"
          placeholder="puntos"
          value={form.points}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex flex_dc>
        <label>Tiempo</label>
        <input
          name="time"
          type="number"
          placeholder="Tiempo"
          value={form.time}
          onChange={handleChangeForm}
        />
      </Wrapper>

      <Wrapper flex>
        <select name="category" onChange={handleChangeForm}>
          <option key={`c1`} value="">
            Categoría
          </option>

          {categories.map(({ id, name }) => (
            <option key={`${id}_c`} value={id}>
              {name}
            </option>
          ))}
        </select>

        <select name="difficulty" onChange={handleChangeForm}>
          <option key={`d1`} value="">
            Dificultad
          </option>

          {difficulties.map(({ id, name }) => (
            <option key={`${id}_d`} value={id}>
              {name}
            </option>
          ))}
        </select>

        <select name="status" onChange={handleChangeForm}>
          <option key={`s1`} value="">
            Estado
          </option>
          {statuses.map(({ id, name }) => (
            <option key={`${id}_s`} value={id}>
              {name}
            </option>
          ))}
        </select>
      </Wrapper>

      <input type="submit" value="Agregar" />
    </ExerFormStyled>
  );
};

const Title = styled.h2`
  font-size: 2rem;
`;

const ExerFormStyled = styled(Wrapper)`
  width: 70%;
  margin: 1rem auto;
  padding: 1rem;
  margin-bottom: 5rem;
  border-radius: 1rem;

  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};

  textarea {
    padding: 0.5rem;
  }

  div:nth-child(2) {
    width: 100%;
  }

  div input {
    padding: 0.5rem;
  }

  div label {
    margin: 0.2rem 0;
  }

  div {
    margin: 0.5rem 0;
  }

  label {
    font-size: 1.2rem;
    margin: 0.3125rem 0;
    font-weight: 600;
  }

  input[type="submit"] {
    width: min-content;
    padding: 1rem;
    background: ${({ theme: { successColor } }) => successColor};

    border: none;
    outline: none;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
