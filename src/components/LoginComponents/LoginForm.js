import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import GroupInput from "../inputs/GroupInput";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import PrimaryBtn from "../ui/PrimaryBtn";

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
      <PrimaryBtn
        isLoading={authLoading}
        type="submit"
        as="input"
        value="Iniciar sesión"
      >
        Iniciar sesión
      </PrimaryBtn>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled(Wrapper)`
  padding: 3rem 2rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0 1.875em -1.25em ${({ theme: { shadowColor } }) => shadowColor};
  width: 30rem;
`;

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`;
