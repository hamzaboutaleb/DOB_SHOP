import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { clearAuth, isLoggedIn, setAuth } from "../../utlis/auth";
import { logout } from "../../services/authenticationApi";

const authContext = createContext({});
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const setCredentials = useCallback(({ token, username }) => {
    setAuth({ username, token });
    setIsAuth(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsAuth(true);
    }
  }, []);

  async function logoutFn() {
    await logout();
    clearAuth();
    setIsAuth(false);
  }

  return (
    <authContext.Provider
      value={{
        isAuth,
        setCredentials,
        logout: logoutFn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
