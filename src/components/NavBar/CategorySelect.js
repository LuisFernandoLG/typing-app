import styled from "styled-components";

export const CategorySelect = () => {
  return (
    <Select>
      <option>Categoría</option>
      <option>hi</option>
      <option>hi</option>
      <option>hi</option>
    </Select>
  );
};

const Select = styled.select`
  width: auto;
  padding: 1rem;

  font-weight: 700;

  /* flex-grow: 0.1; */

  border: none;
  outline: none;

  cursor: pointer;

  border-radius: 1rem;
`;
