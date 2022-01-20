import styled from "styled-components";
import { Loader } from "../Loader";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { useSignInForm } from "../../hooks/useSignInForm";
import GroupInput from "../inputs/GroupInput";
import PrimaryBtn from "../ui/PrimaryBtn";

const nameRegex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;
const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

export const SignInForm = () => {
  const {
    authLoading,
    register,
    errors,
    handleSubmit,
    handleSubmitOwn,
    fecthLoading,
  } = useSignInForm();

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
        name="Usuario"
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

      <PrimaryBtn
        isLoading={fecthLoading || authLoading}
        value="Registrarse"
        type="submit"
      >
        Registrarse
      </PrimaryBtn>
    </SignInWrapper>
  );
};

const SignInWrapper = styled(Wrapper)`
  padding: 3rem 2rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0 1.875em -1.25em ${({ theme: { shadowColor } }) => shadowColor};
  width: 30rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
