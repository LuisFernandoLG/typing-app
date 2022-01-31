import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { CategorySelect } from './CategorySelect'
import { SearchBar } from './SearchBar'

export const ToolBarSearch = ({
  selectCategory,
  setSearchQuery,
  search,
  searchByQuery
}) => {
  return (
    <Container flex flex_jc_c gap="0.5rem">
      <SearchBar
        search={search}
        setSearchQuery={setSearchQuery}
        searchByQuery={searchByQuery}
      />
      <CategorySelect selectCategory={selectCategory} />
    </Container>
  )
}

const Container = styled(Wrapper)`
  margin: 0 auto;
  width: 70%;
  border-radius: 1rem;
  padding: 0.5rem;
`
