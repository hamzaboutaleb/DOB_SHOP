import { useAuth } from "../../contexts/auth/authContext";

function ForGuest({ children }) {
  const { isAuth } = useAuth();
  if (isAuth) return null;

  return children;
}

export default ForGuest;
