import { ReactNode, useState } from "react";
import { createContext } from "react";

interface USERDATA {
  username: string;
  links: string[];
}

type DataContextType = {
  data: USERDATA | null;
  updateData: React.Dispatch<React.SetStateAction<USERDATA | null>>;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

type UserContextProviderProps = {
  children: ReactNode;
};

export const DataContextProvider = ({ children }: UserContextProviderProps) => {
  const [data, setData] = useState<USERDATA | null>(null);

  return (
    <DataContext.Provider value={{ data, updateData: setData }}>
      {children}
    </DataContext.Provider>
  );
};
