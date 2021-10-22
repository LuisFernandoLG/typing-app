import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <Title>¡Bienvenido de nuevo!</Title>

      <GroupInput>
        <Label>Correo electrónico</Label>
        <EmailInput />
      </GroupInput>

      <GroupInput>
        <Label>Contraseña</Label>
        <PasswordInput />
      </GroupInput>

      <PrimaryButton>Iniciar sesión</PrimaryButton>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  margin: 5rem auto;

  border-radius: 1rem;

  background: ${({ theme: { bgColor } }) => bgColor};

  padding: 1.5rem;
`;

const GroupInput = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const EmailInput = styled.input.attrs({ type: "email" })``;
const PasswordInput = styled.input.attrs({ type: "password" })``;
const PrimaryButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;

  background: ${({ theme: { primaryColor } }) => primaryColor};
  color: ${({ theme: { bgColor } }) => bgColor};
  font-weight: 600;
`;
