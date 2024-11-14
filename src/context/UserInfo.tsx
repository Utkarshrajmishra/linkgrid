import { createContext, ReactNode, useState } from "react";
import { UserContextTypes, UserInfoTypes } from "@/types/Types";

export const UserContext = createContext<UserContextTypes>({
  userData: {
    username: "",
    template: -1,
    bio: "",
    name: "",
    soicalProviders:[],
    socialLink:[],
    profileImage:""
  },
  setUserData: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserInfoTypes>({
    username: "",
    template: -1,
    bio: "",
    name: "",
    soicalProviders: [],
    socialLink:[],
    profileImage:""
  });

  const contextValue: UserContextTypes = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
