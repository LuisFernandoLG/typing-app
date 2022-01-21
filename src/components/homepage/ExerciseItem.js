import { Link } from "react-router-dom";
import styled from "styled-components";
import { routesV2 } from "../../routes";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import Skeleton from "react-loading-skeleton";

export const ExerciseItem = ({ id, title, content, category, difficulty }) => {
  const exerciseRoute = routesV2.LOGGED_APP.subPages.EXERCISE_PAGE.route;

  return (
    <Link to={`${exerciseRoute}/${id}`}>
      <ExerciseItemContainer>
        <Title>{title || <Skeleton width={"20%"} />}</Title>
        <Content>{content || <Skeleton count={1} />}</Content>
        <Wrapper flex flex_jc_fe gap="1rem">
          <Category>{difficulty || <Skeleton width={"3rem"} />}</Category>
          <Diffculty>{category || <Skeleton width={"3rem"} />}</Diffculty>
        </Wrapper>
      </ExerciseItemContainer>
    </Link>
  );
};

const ExerciseItemContainer = styled.div`
  padding: 2rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  margin: 2rem 0;
  border-radius: 1rem;
  background: ${({ theme: { bgColor } }) => bgColor};

  &:hover {
    background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`;
const Content = styled.p`
  margin: 0.5rem 0;
  max-width: 90%;
  font-size: 1rem;
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
  line-height: 1.5rem;
  text-align: left;

  /* Limit lines */
  text-overflow: ellipsis;
  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`;

const TagStyle = styled.span`
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme: { secondaryColor } }) => secondaryColor};

  font-weight: 700;
`;

const Category = styled(TagStyle)``;
const Diffculty = styled(TagStyle)``;
