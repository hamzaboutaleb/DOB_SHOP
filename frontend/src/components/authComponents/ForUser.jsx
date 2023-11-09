import { useAuth } from "../../contexts/auth/authContext";

function ForUser({ children }) {
  const { isAuth } = useAuth();
  if (!isAuth) return null;

  return children;
}

export default ForUser;
