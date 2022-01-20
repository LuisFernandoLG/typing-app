import { useSession } from "../../hooks/useSession";
import PrimaryBtn from "../ui/PrimaryBtn";

export const LoginButton = () => {
  const { handleLogOut } = useSession();

  return <PrimaryBtn onClick={handleLogOut}>Cerrar sesión</PrimaryBtn>;
};
