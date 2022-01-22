import { useSession } from "../../hooks/useSession";
import { Button } from "../ui/Button";

export const LoginButton = () => {
  const { handleLogOut } = useSession();

  return (
    <Button primary={true} onClick={handleLogOut}>
      Cerrar sesión
    </Button>
  );
};
