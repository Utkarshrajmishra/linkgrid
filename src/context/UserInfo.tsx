import { createContext, ReactNode, useState } from "react";
import { UserContextTypes, UserInfoTypes } from "@/types/Types";

export const UserContext = createContext<UserContextTypes>({
  userData: {
    username: "",
    template: "",
    bio: "",
    name: "",
  },
  setUserData: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserInfoTypes>({
    username: "",
    template: "",
    bio: "",
    name: "",
  });

  const contextValue: UserContextTypes = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
