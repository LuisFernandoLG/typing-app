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
  background: ${({ theme: { primaryColor } }) => primaryColor};
  transition: background 300ms ease, box-shaow 300ms ease;

  color: ${({ theme: { bgColor } }) => bgColor};
  font-weight: 700;

  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && `color:transparent;`}

  &:hover, &:focus {
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
    box-shadow: 0 10px 30px -10px ${({ theme: { secondaryColor } }) => secondaryColor};
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
