import styled from "styled-components";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";

export const Footer = () => {
  return (
    <FooterWrapper as="footer" flex flex_jc_se flex_ai_c>
      <Wrapper>
        <Title>Type and Type® - 2021-presente</Title>
        <Paragraph>
          Blvd. Tecnológico, Col. Guaymitas 23440 San José del Cabo, México
        </Paragraph>
      </Wrapper>

      <Wrapper>
        <Title>Contacto</Title>
        <Paragraph>support@typeandtype.com</Paragraph>
      </Wrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(Wrapper)`
  margin-top: 5rem;
  width: 100%;
  padding: 1rem;
  background: ${({ theme: { primaryColor } }) => primaryColor};
`;

const Title = styled.h3``;
const Paragraph = styled.p``;
