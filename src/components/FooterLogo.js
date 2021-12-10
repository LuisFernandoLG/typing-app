import styled from "styled-components";
import WhiteLogo from "../images/logoBlanco.png";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const FooterLogo = () => {
  return (
    <FloatContainer flex flex_dc flex_jc_c flex_ai_c>
      <Logo src={WhiteLogo} />
      <CompanyName>Type and Type</CompanyName>
    </FloatContainer>
  );
};

const FloatContainer = styled(Wrapper)`
  font-size: 30px;
`;

const CompanyName = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  color: ${({ theme: { bgColor } }) => bgColor};
`;
const Logo = styled.img`
  width: 3.125em;
`;
