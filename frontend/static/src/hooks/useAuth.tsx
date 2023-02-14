import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    navigate("/home/games");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const refreshUser = (data: any) => {
    setUser(data);
    navigate(`/home/${user.username}`);
  };

  const refreshUserPicks = (data: any) => {
    setUser(data);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      refreshUser,
      refreshUserPicks,
    }),
    [user]
  );
  return <AuthContext.Provider children={children} value={value} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
