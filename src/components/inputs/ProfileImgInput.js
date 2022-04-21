// import DefaulImg from '../../images/photos/iram.jpeg'
import styled from 'styled-components'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { resizeFile } from '../../helpers/resizeFile'
import { Image } from '../ui/Image'

export const ProfileImageInput = ({
  name,
  value,
  placeHolder,
  errors,
  handleChangeFiles
}) => {
  const handleFileSelected = (e) => {
    if (e.target.files[0]) {
      resizeFile({ file: e.target.files[0] }).then((imageResized) => {
        handleChangeFiles({ name, value: imageResized })
      })
    }
  }

  return (
    <ProfileImageInputStyled errors={errors}>
      <label htmlFor="image-profile">
        <Image src={value} alt="user" width="10rem" height="10rem"/>
        {/* <span>{placeHolder}</span> */}
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        id="image-profile"
        onChange={handleFileSelected}
      />
      <p className="error">{errors}</p>
    </ProfileImageInputStyled>
  )
}

// const PhotoPreview = styled(FlexContainer)`
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: 10rem;
//   border: 0.3125rem solid ${({ theme: { accentColor } }) => accentColor};

//   &:hover{
//       opacity: 0.7;
//   }
//   img {
//     width: 8rem;
//     height: 8rem;
//     object-fit: cover;
//   }
//   `

const ProfileImageInputStyled = styled(FlexContainer)`
  label {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    cursor: pointer;
    border-radius: 1rem;
    background: ${({ theme: { accentColor } }) => accentColor};
    border-radius: 5rem;
    span {
      font-size: 1.2rem;
      text-align: center;
      text-decoration: underline;
      font-weight: 600;
      color: ${({ theme: { errorColor }, errors }) =>
        errors ? errorColor : errorColor};
    }
  }
  input {
    display: none;
  }
  .error {
    color: ${({ theme: { errorColor } }) => errorColor};
    font-weight: 600;
    text-align: center;
  }
`
