import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { endpoints } from "../signIn/api";

const initialCategories = [
  {
    id: -1,
    name: "categoría",
  },
];

export const CategorySelect = ({ selectCategory }) => {
  const [categories, setCategories] = useState(initialCategories);
  const { fetchData, data } = useFetch();

  useEffect(() => {
    fetchData(endpoints.categories);
  }, []);

  useEffect(() => {
    if (data) {
      const newCategories = data.data.categories;
      console.log(data);
      setCategories([...categories, ...newCategories]);
    }
  }, [data]);

  const handleChange = (e) => selectCategory(e.target.value);

  return (
    <Select onChange={handleChange}>
      {categories.map(({ id, name }) => (
        <option value={id}>{name}</option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  width: auto;
  padding: 0.5rem;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  font-weight: 700;

  border: none;
  outline: none;

  cursor: pointer;

  border-radius: 1rem;
  font-size: 1em;
`;
