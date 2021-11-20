import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import searchIcon from "../../images/search.png";

export const SearchBar = () => {
  return (
    <Container flex flex_ai_c gap="1rem">
      <SearchIcon src={searchIcon} alt="search" />
      <SearchInput type="search" placeholder="Buscar . . ." />
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
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  border: none;
  outline: none;
`;
