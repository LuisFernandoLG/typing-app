import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { CategorySelect } from "./CategorySelect";
import { SearchBar } from "./SearchBar";

export const ToolBarSearch = () => {
  return (
    <Container flex>
      <SearchBar /> <CategorySelect />
    </Container>
  );
};

const Container = styled(Wrapper)`
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
