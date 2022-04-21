import styled from 'styled-components'
import defaultImgProfile from '../../images/defaultProfile.png'

export const Image = ({ src, width, height, cursorPointer, coloredOutline, ...res }) => {
  return <StyledImage src={src || defaultImgProfile} coloredOutline={coloredOutline} width={width || '30px'} height={height || '30px'} cursorPointer={cursorPointer} {...res}/>
}

const StyledImage = styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    object-fit:cover;
    border-radius: 10rem;
    outline: ${({ coloredOutline }) => coloredOutline ? `0.225rem solid ${({ theme: { accentColor } }) => accentColor}` : null};
    /* cursor: ${({ cursorPointer }) => cursorPointer ? 'pointer' : null}; */
    cursor: ${({ cursorPointer }) => cursorPointer ? 'pointer' : null};
    /* cursor: pointer; */
`
