import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth/authContext";
import { useEffect } from "react";

function UserRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  if (!isAuth) return null;

  return children;
}

export default UserRoute;
