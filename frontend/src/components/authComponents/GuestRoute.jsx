import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/authContext";
import { useEffect } from "react";

function GuestRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  if (isAuth) return null;
  console.log("hey");

  return children;
}

export default GuestRoute;
