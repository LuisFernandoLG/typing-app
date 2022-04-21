export const ComboBoxCategory = ({
  currentCategory,
  categories,
  setCategory
}) => {
  return (
    <select>
      {categories.map((item, i) => (
        <option key={`${i}-itemx`}>{item}</option>
      ))}
    </select>
  )
}
