import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFetch } from '../../hooks/useFetch'
import { endpoints } from '../signIn/api'

const initialCategories = [
  {
    id: -1,
    name: 'tema'
  }
]

export const CategorySelect = ({ selectCategory }) => {
  const [categories, setCategories] = useState(initialCategories)
  const { fetchData, data } = useFetch()

  useEffect(() => {
    fetchData(endpoints.categories)
  }, [])

  useEffect(() => {
    if (data) {
      const newCategories = data.data.categories
      setCategories([...categories, ...newCategories])
    }
  }, [data])

  const handleChange = (e) => selectCategory(e.target.value)

  return (
    <Select onChange={handleChange}>
      {categories.map(({ id, name }) => (
        <option value={id} key={`${id}-category`}>
          {name}
        </option>
      ))}
    </Select>
  )
}

const Select = styled.select`
  width: auto;
  padding: 1rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  color: ${({ theme: { fontColor } }) => fontColor};

  font-weight: 700;

  border: none;
  outline: none;
  cursor: pointer;

  font-size: 1em;
`
