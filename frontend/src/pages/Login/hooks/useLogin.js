import { useState } from "react";
import { useAuth } from "../../../contexts/auth/authContext";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../../services/authenticationApi";

export function useLogin(username, password) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  async function onSubmit() {
    if (!username.isValid || !password.isValid) return;
    try {
      setError(null);
      setIsLoading(true);
      const resp = await requestLogin({
        username: username.value,
        password: password.value,
      });
      auth.setCredentials(resp);
      navigate(-1);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    error,
    isLoading,
    onSubmit,
  };
}
