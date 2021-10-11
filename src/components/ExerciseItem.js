import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const ExerciseItem = ({ id, title, content, category, difficulty }) => {
  return (
    <Link to={`${routes.EXERCICE_PAGE}/${id}`}>
      <ExerciseItemContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Wrapper flex flex_jc_fe gap="1rem">
          <Category>{difficulty}</Category>
          <Diffculty>{category}</Diffculty>
        </Wrapper>
      </ExerciseItemContainer>
    </Link>
  );
};

const ExerciseItemContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  margin: 2rem 0;
  border-radius: 1rem;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`;
const Content = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const TagStyle = styled.span`
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  padding: 0.5rem;
  border-radius: 0.5rem;

  font-weight: 700;
`;

const Category = styled(TagStyle)``;
const Diffculty = styled(TagStyle)``;
