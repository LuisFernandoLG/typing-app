import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Footer = () => {
  return (
    <FooterWrapper as="footer" flex flex_jc_se>
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
  bottom: 0;
  background: red;
  padding: 1rem;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;

const Title = styled.h3``;
const Paragraph = styled.p``;
