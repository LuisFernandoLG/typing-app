import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import SadFace from "./../../images/sadFace.svg";

export const NoResultsMessage = () => {
  return (
    <Wrapper flex flex_dc flex_jc_c flex_ai_c>
      <Title>No hemos encontrado resultados</Title>
      <Image src={SadFace} />
    </Wrapper>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 2rem;
  text-decoration: underline;
  color: ${({ theme: { primaryColor } }) => primaryColor};
`;

const Image = styled.img`
  width: 30%;
`;
