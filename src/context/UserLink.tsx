import  { createContext, useState, ReactNode } from "react";
import { LinksTypes, LinkContextTypes } from "@/types/Types";

// Create the context with default values
export const UserLinkContext = createContext<LinkContextTypes>({
  userLink: [], // Default to an empty array
  setUserLink: () => {}, // Default to a no-op function
});

// Provider component
export const LinkContextProvider = ({ children }: { children: ReactNode }) => {
  // State for userLink with the correct type
  const [userLink, setUserLink] = useState<LinksTypes[]>([]);

  // Context value to be provided
  const contextValue: LinkContextTypes = {
    userLink,
    setUserLink,
  };

  return (
    <UserLinkContext.Provider value={contextValue}>
      {children}
    </UserLinkContext.Provider>
  );
};
