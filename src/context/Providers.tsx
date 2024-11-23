import { createContext, ReactNode, useState } from "react";

interface Link {
  link: string;
  show: boolean;
  totalClicks: Number; 
}

interface LinkType {
  providersIndex: Number[]; 
  socialProvider: Link[];
}

interface Providers {
  provider: LinkType;
  setProvider: (data: LinkType) => void;
}

export const linkInputContext = createContext<Providers>({
  provider: {
    providersIndex: [],
    socialProvider: [],
  },
  setProvider: () => {}, // No-op function
});

export const LinkInputProvider = ({ children }: { children: ReactNode }) => {
  // Explicitly type the state with `LinkType`
  const [provider, setProvider] = useState<LinkType>({
    providersIndex: [],
    socialProvider: [],
  });

  // Provide the context value
  const contextValue: Providers = {
    provider,
    setProvider,
  };

  return (
    <linkInputContext.Provider value={contextValue}>
      {children}
    </linkInputContext.Provider>
  );
};
