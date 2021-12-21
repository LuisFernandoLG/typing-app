import styled from "styled-components";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { useSignInForm } from "../../hooks/useSignInForm";
import GroupInput from "../inputs/GroupInput";

const nameRegex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;
const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

export const SignInForm = () => {
  const {
    authLoading,
    register,
    errors,
    handleSubmit,
    handleSubmitOwn,
    loading,
  } = useSignInForm();

  if (authLoading) return <Loader />;

  return (
    <SignInWrapper
      as="form"
      flex
      flex_dc
      flex_ai_c
      gap="3rem"
      onSubmit={handleSubmit(handleSubmitOwn)}
    >
      <Title>Registro</Title>

      <GroupInput
        name="Nombre"
        type="text"
        regex={nameRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />

      <GroupInput
        name="Apellido"
        type="text"
        regex={nameRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />

      <GroupInput
        name="Segundo apellido"
        type="text"
        regex={nameRegex}
        isRequired={true}
        register={register}
        errors={errors}
      />

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

      {loading ? <Loader /> : <SubmitBtn type="submit" value="Registrarse" />}
    </SignInWrapper>
  );
};

const SubmitBtn = styled.input`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  color: ${({ theme: { bgColor } }) => bgColor};
  padding: 1rem;
  cursor: pointer;

  border: none;
  outline: none;
`;

const SignInWrapper = styled(Wrapper)`
  width: 30rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0 1.875rem -1.25rem ${({ theme: { shadowColor } }) => shadowColor};
  padding: 1rem 2rem;
  margin: 0 5rem;
`;

const Title = styled.h2`
  text-align: center;
`;
