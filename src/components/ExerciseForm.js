import { useState } from "react";
import styled from "styled-components";
import { Loader } from "./Loader";
import { Wrapper } from "./shareStyleComponents/Wrapper";

const initialExerForm = {
  title: "",
  text_content: "",
  points: 0,
  time: 30,
  category: null,
  status: null,
  difficulty: null,
};

export const ExerciseForm = ({
  categories,
  difficulties,
  statuses,
  addExercise,
  exerLoadingAdded,
}) => {
  const [form, setForm] = useState(initialExerForm);

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise(form);
  };

  if (exerLoadingAdded) return <Loader />;

  return (
    <ExerFormStyled as="form" flex flex_jc_c onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChangeForm} />
      <textarea
        name="text_content"
        type="text"
        value={form.text_content}
        onChange={handleChangeForm}
      />
      <input
        name="points"
        type="number"
        value={form.points}
        onChange={handleChangeForm}
      />

      <input
        name="time"
        type="number"
        value={form.time}
        onChange={handleChangeForm}
      />

      <select name="category" onChange={handleChangeForm}>
        <option key={`c1`} value={null}>
          Elegir
        </option>

        {categories.map(({ id, name }) => (
          <option key={`${id}_c`} value={id}>
            {name}
          </option>
        ))}
      </select>

      <select name="difficulty" onChange={handleChangeForm}>
        <option key={`d1`} value={null}>
          Elegir
        </option>

        {difficulties.map(({ id, name }) => (
          <option key={`${id}_d`} value={id}>
            {name}
          </option>
        ))}
      </select>

      <select name="status" onChange={handleChangeForm}>
        <option key={`s1`} value={null}>
          Elegir
        </option>
        {statuses.map(({ id, name }) => (
          <option key={`${id}_s`} value={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <input type="submit" value="Guardar" />
    </ExerFormStyled>
  );
};

const ExerFormStyled = styled(Wrapper)`
  margin: 1rem 0;
  margin-bottom: 10rem;
  padding: 1rem;
  border-radius: 1rem;

  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  textarea {
    flex-basis: 100%;
  }
`;
