import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { isLoggedIn, setAuth } from "../../utlis/auth";

const authContext = createContext({});
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const setCredentials = useCallback(({ token, username }) => {
    setAuth({ username, token });
    setIsAuth(true);
  }, []);

  useEffect(() => {
    console.log("mus run once");
    if (isLoggedIn()) {
      setIsAuth(true);
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        isAuth,
        setCredentials,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
