const { useState } = require("react");
const { createContext } = require("vm");

const SoicalCounter = createContext({
  links: [],
  setLinks: () => {},
});

const SocialLinkProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  return <SoicalCounter.Provider>{<children />}</SoicalCounter.Provider>;
};

export { SoicalCounter, SocialLinkProvider };
