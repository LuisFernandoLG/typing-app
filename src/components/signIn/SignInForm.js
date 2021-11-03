import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const SignInForm = () => {
  return (
    <SignInWrapper>
      <Title>Registrarse ahora</Title>

      <InputGroup>
        <Label>Nombre</Label>
        <Input />
      </InputGroup>

      <InputGroup>
        <Label>Apellido</Label>
        <Input />
      </InputGroup>

      <InputGroup>
        <Label>Segundo apellido</Label>
        <Input />
      </InputGroup>

      <InputGroup>
        <Label>Correo electrónico</Label>
        <Input />
      </InputGroup>

      <InputGroup>
        <Label>Contraseña</Label>
        <Input />
      </InputGroup>
    </SignInWrapper>
  );
};

const SignInWrapper = styled(Wrapper)`
  background: ${({ theme: { bgColor } }) => bgColor};
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 auto;
`;

const Title = styled.h2``;

const Label = styled.label``;
const Input = styled.input`
  width: 100%;
`;
const InputGroup = styled(Wrapper)`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;
