import { useHistory } from "react-router";
import { routes } from "../../routes";

export const NotFoundPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push(routes.HOME_PAGE);
  };

  return (
    <div>
      <p>Vaya, no hemos podido encontrar lo que buscas.</p>
      <button onClick={handleClick}>Volver al inicio</button>
    </div>
  );
};
