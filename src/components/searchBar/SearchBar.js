import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import searchIcon from "../../images/search.png";

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
      <SearchIcon
        src={searchIcon}
        alt="search"
        onClick={handleClickOnSearchIcon}
      />
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
  border-radius: 1rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  padding: 1rem;
`;
const SearchIcon = styled.img`
  height: 1.5rem;
  cursor: pointer;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  border: none;
  outline: none;
`;
