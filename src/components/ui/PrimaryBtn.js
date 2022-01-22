import styled from "styled-components";
import { Loader } from "../Loader";

const PrimaryBtn = ({ children, isLoading, onClick }, props) => {
  return (
    <Button onClick={onClick} {...props} disabled={isLoading}>
      <Content> {isLoading ? <Loader /> : children} </Content>
      <BaseSizeHelper>{children}</BaseSizeHelper>
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  padding: 1rem 2rem;
  background: ${({ theme: { bgColor } }) => bgColor};
  transition: background 300ms ease, box-shadow 300ms ease;
  font-size: 1.2rem;
  border-radius: ${({ theme: { border_radius } }) => border_radius};

  color: ${({ theme: { primaryColor } }) => primaryColor};
  font-weight: 700;

  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && `color:transparent;`}

  &:hover, &:focus {
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
    box-shadow: 0 0.4375rem 1.575rem -0.625rem ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`;

const BaseSizeHelper = styled.span`
  opacity: 0;
`;
const Content = styled.span`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
export default PrimaryBtn;
