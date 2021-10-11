import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const SideBarLink = ({ icon, title, description, linkPage }) => {
  //   return null;

  return (
    <NavLink to={linkPage}>
      <LinkContainer flex gap="1rem">
        <Image src={icon} />

        <Wrapper flex flex_dc flex_jc_c gap="0.2rem">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper>
      </LinkContainer>
    </NavLink>
  );
};

const LinkContainer = styled(Wrapper)`
  width: 100%;
  height: 100px;
  padding: 1rem 2rem;
`;

const Image = styled.img`
  height: 100%;
`;
const Title = styled.h2`
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`;
const Description = styled.p`
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`;
