import { useHistory } from "react-router";
import styled from "styled-components";
import { routes, routesV2 } from "../routes";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";

import notFound from "../images/notFoundPage.svg";

export const NotFoundPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push(routesV2.HOME_PAGE.route);
  };

  return (
    <Container flex flex_dc flex_jc_c flex_ai_c>
      <Image src={notFound} />
      <p>Vaya, no hemos podido encontrar lo que buscas.</p>
      <BackBtn onClick={handleClick}>Volver al inicio</BackBtn>
    </Container>
  );
};

const Container = styled(Wrapper)`
  margin: 0 auto;
`;

const Image = styled.img``;

const BackBtn = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  cursor: pointer;
`;
