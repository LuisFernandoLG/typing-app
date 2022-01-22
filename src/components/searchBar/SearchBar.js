import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setSearchQuery, search, searchByQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchByQuery(search);
  };

  const handleClickOnSearchIcon = () => {
    console.log("BUSCANDO SEGUN");
    searchByQuery(search);
  };

  return (
    <Container as="form" flex flex_ai_c gap="1rem" onSubmit={handleSubmit}>
      <SearchIcon onClick={handleClickOnSearchIcon}>
        <FaSearch />
      </SearchIcon>
      <SearchInput
        value={search}
        onChange={handleChange}
        type="search"
        placeholder="Buscar . . ."
      />
    </Container>
  );
};

const Container = styled(Wrapper)`
  flex-grow: 1;
  border-radius: ${({ theme: { border_radius } }) => border_radius};
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 1rem;
`;
const SearchIcon = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme: { fontColor } }) => fontColor};
  background: inherit;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  border: none;
  outline: none;
  color: ${({ theme: { fontColor } }) => fontColor};

  &::placeholder {
    color: ${({ theme: { fontColor } }) => fontColor};
    opacity: 0.6;
  }
`;
