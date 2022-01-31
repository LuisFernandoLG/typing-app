import PropTypes from 'prop-types'
import styled from 'styled-components'

const GroupInput = ({ name, regex, type, isRequired, errors, register }) => {
  return (
    <GroupInputStyled error={errors[name]}>
      <input
        placeholder={' '}
        type={type}
        id={name}
        {...register(name, {
          required: isRequired,
          pattern: regex
        })}
      />
      <Label htmlFor={name}>{name}</Label>
      {errors[name]?.type === 'required' && <InputError>Requerido</InputError>}
      {errors[name]?.type === 'pattern' && (
        <InputError>{name} inválido</InputError>
      )}
    </GroupInputStyled>
  )
}

// GroupInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   regex: PropTypes.string,
//   type: PropTypes.string,
//   isRequired: PropTypes.bool,
//   errors: PropTypes.object.isRequired,
// }

const GroupInputStyled = styled.div`
  width: 100%;

  position: relative;

  height: 2.5em;
  padding: 0.5em;

  border-radius: ${({ theme: { border_radius } }) => border_radius};
  box-shadow: 0 0.05em 0.4em -0.1em ${({ error, theme: { errorColor, disableColor } }) => (error ? errorColor : disableColor)};

  color: ${({ error, theme: { errorColor, fontColor } }) =>
    error ? errorColor : fontColor};

  label {
    cursor: text;
  }

  background: ${({ theme: { whiteColor } }) => whiteColor};

  input {
    border: none;
    outline: none;
    position: absolute;
    left: 0.5rem;
    top: 0;
    height: 100%;
    width: 95%;
    color: ${({ theme: { disableColor } }) => disableColor};
    font-weight: 600;
    background: inherit;

    &:focus + .border {
      border: 0.125em solid inherit;
    }

    &:focus + .border + label {
      font-weight: 600;
    }
  }

  input::after {
    position: absolute;
    width: 100%;
    height: 0.3125em;
    left: 0;
    background: red;
    z-index: 200;
  }
`

const Label = styled.label`
  transition: transform 200ms ease;

  font-weight: 600;

  position: absolute;
  z-index: 500;
  transform: translateY(-160%);

  color: inherit;
  left: 0;
`

const InputError = styled.p`
  z-index: 300;
  position: absolute;
  bottom: -65%;
  color: inherit;
  left: 0;
`

export default GroupInput
