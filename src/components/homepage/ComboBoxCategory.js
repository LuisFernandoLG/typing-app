import styled from "styled-components";

export const ComboBoxCategory = ({
  currentCategory,
  categories,
  setCategory,
}) => {
  return (
    <select>
      {categories.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};
