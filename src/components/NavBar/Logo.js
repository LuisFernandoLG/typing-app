import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import typeAndTypeIcon from "../../images/keyboard.png";
import { useHistory } from "react-router";
import { routes } from "../../routes";

export const Logo = () => {
  let history = useHistory();

  const goHomePage = () => history.push(routes.HOME_PAGE);

  return (
    <Container flex flex_ai_c flex_jc_c onClick={goHomePage}>
      <ImgLogo src={typeAndTypeIcon} alt="Type and Type" />
      <AppName>Type And Type</AppName>
    </Container>
  );
};

const Container = styled(Wrapper)`
  cursor: pointer;
  padding: 1.5;
`;

const AppName = styled.h2`
  font-size: 2em;
`;

const ImgLogo = styled.img`
  height: 3.5em;
`;
