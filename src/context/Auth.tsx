import { createContext, ReactNode, useState } from "react";
import { AuthContextTypes, AuthInfoTypes } from "@/types/Types";

export const AuthContext = createContext<AuthContextTypes>({
  auth: {
    isLogin: false,
    userEmail: "",
  },
  setAuth: (currentAuth:AuthInfoTypes) => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({
    isLogin: false,
    userEmail: "",
  });

  const contextValue: AuthContextTypes = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
