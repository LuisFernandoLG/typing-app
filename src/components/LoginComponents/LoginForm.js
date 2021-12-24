import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import GroupInput from "../inputs/GroupInput";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";

const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

export const LoginForm = () => {
  const { setLogIn, authLoading, isAuth } = useContext(AuthContext);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const hanldeSubmitOwn = (data) => {
    setLogIn(watch("Correo"), watch("Contraseña"));
    console.log(data);
  };

  useEffect(() => {
    if (isAuth) history.push(routes.HOME_PAGE);
  }, [isAuth]);

  return (
    <LoginFormContainer
      as="form"
      flex
      flex_dc
      flex_ai_c
      gap="3rem"
      onSubmit={handleSubmit(hanldeSubmitOwn)}
    >
      <Title>Inicio de sesión</Title>

      <GroupInput
        name="Correo"
        regex={emailRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />
      <GroupInput
        name="Contraseña"
        type="password"
        isRequired={true}
        register={register}
        errors={errors}
      />

      {authLoading ? (
        <Loader />
      ) : (
        <PrimaryButton type="submit" value="Iniciar sesión" />
      )}
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled(Wrapper)`
  padding: 2rem;

  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0 1.875rem -1.25rem ${({ theme: { shadowColor } }) => shadowColor};

  font-size: 20px;
  width: 30rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const PrimaryButton = styled.input`
  border: none;
  outline: none;
  margin-top: 1rem;
  width: 50%;
  padding: 0.5em;
  cursor: pointer;

  background: ${({ theme: { primaryColor } }) => primaryColor};
  color: ${({ theme: { bgColor } }) => bgColor};
  font-weight: 600;
`;
