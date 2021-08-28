import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

export const ExerciseCard = ({ name }) => {
  return;
  <NavLink to={`${routes.EXERCICE_PAGE}/name`}>
    <ExerciseCardStyled>{name}</ExerciseCardStyled>
  </NavLink>;
};

const ExerciseCardStyled = styled.div`
  padding: 10px;
`;
