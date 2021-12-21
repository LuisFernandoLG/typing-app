import PropTypes from "prop-types";
import styled from "styled-components";

const GroupInput = ({ name, regex, type, isRequired, errors, register }) => {
  return (
    <GroupInputStyled error={errors[name]}>
      <input
        placeholder={" "}
        type={type}
        id={name}
        {...register(name, {
          required: isRequired,
          pattern: regex,
        })}
      />
      <div className="border"></div>
      <Label htmlFor={name}>{name}</Label>
      {errors[name]?.type === "required" && <InputError>Requerido</InputError>}
      {errors[name]?.type === "pattern" && (
        <InputError>{name} inválido</InputError>
      )}
    </GroupInputStyled>
  );
};

GroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  regex: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  errors: PropTypes.object.isRequired,
};

const GroupInputStyled = styled.div`
  width: 100%;

  position: relative;

  height: 2.5rem;
  /* margin: 1.5rem 0; */
  padding: 0.5rem;

  color: ${({ error, theme: { errorColor } }) =>
    error ? errorColor : "black"};
  &,
  label {
    cursor: text;
  }

  .border {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid
      ${({ error, theme: { errorColor } }) => (error ? errorColor : "black")};
    z-index: 400;
    pointer-events: none;
  }

  input {
    border: none;
    outline: none;
    position: absolute;
    width: 95%;
    padding: 0.2rem;

    &:focus + .border {
      border: 2px solid
        ${({ error, theme: { errorColor } }) => (error ? errorColor : "black")};
      color: red;
    }

    &:focus + .border + label {
      /* color: green; */
      font-weight: 600;
    }
  }

  input::after {
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    background: red;
    z-index: 200;
  }
`;

const Label = styled.label`
  transition: transform 200ms ease;

  margin-bottom: 0.5rem;
  font-weight: 600;

  position: absolute;
  z-index: 500;
  transform: translateY(-100%);

  color: inherit;
  background: ${({ theme: { bgColor } }) => bgColor};
  padding: 0 0.5rem;
`;

const InputError = styled.p`
  z-index: 300;
  position: absolute;
  bottom: -65%;
  color: inherit;
  left: 0;
`;

export default GroupInput;
