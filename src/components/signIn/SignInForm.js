import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { toast } from "react-toastify";
import AuthContext from "../../contexts/AuthContext";
import { endpoints } from "../signIn/api";

const initialForm = {
  name: "",
  surname: "",
  second_surname: "",
  email: "",
  password: "",
};

const nameRegex = "[a-záéíóúÁÉÍÓÚA-Z ]{0,40}";

export const SignInForm = () => {
  const { fetchData, fetchErrors, data, loading } = useFetch();
  const [form, setForm] = useState(initialForm);
  const { setLogIn, authLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(form),
    };
    fetchData(endpoints.signIn, options);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Hubo un error!");
    }
  }, [fetchErrors]);

  useEffect(() => {
    if (data) {
      if (data.status === 201) toast.error(data.statusText);
      if (data.status === 202) setLogIn(form.email, form.password);
    }
  }, [data]);

  if (authLoading) return <Loader />;

  return (
    <SignInWrapper
      as="form"
      flex
      flex_dc
      flex_ai_c
      flex_jc_c
      onSubmit={handleSubmit}
    >
      <Title>Registrarse ahora</Title>

      <InputGroup>
        <Label>Nombre</Label>
        <Input
          pattern={nameRegex}
          required
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Apellido</Label>
        <Input
          pattern={nameRegex}
          required
          type="text"
          name="surname"
          value={form.surname}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Segundo apellido</Label>
        <Input
          pattern={nameRegex}
          required
          type="text"
          name="second_surname"
          value={form.second_surname}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Correo electrónico</Label>
        <Input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Contraseña</Label>
        <Input
          minLength={8}
          required
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
      {loading ? <Loader /> : null}
      <SubmitBtn type="submit" value="registrarse" />
    </SignInWrapper>
  );
};

const SubmitBtn = styled.input`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  color: ${({ theme: { bgColor } }) => bgColor};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  border: none;
  outline: none;
`;

const SignInWrapper = styled(Wrapper)`
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0 40px -15px #000000;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 5rem;
  flex-grow: 1;
`;

const Title = styled.h2`
  text-align: center;
`;
const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme: { disableColor } }) => disableColor};
  border-radius: 0.2rem;
  padding: 0.2rem;

  &:focus {
    outline: 2px solid ${({ theme: { primaryColor } }) => primaryColor};
  }
`;
const InputGroup = styled(Wrapper)`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
