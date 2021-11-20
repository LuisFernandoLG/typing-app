import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";

export const CategorySelect = ({ category }) => {
  // const [categories, setCategories] = useState("");
  // const { fetchData, data } = useFetch();

  // useEffect(() => {}, []);

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
  padding: 0.5rem;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  font-weight: 700;

  border: none;
  outline: none;

  cursor: pointer;

  border-radius: 1rem;
  font-size: 1em;
`;
