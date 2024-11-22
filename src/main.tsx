import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./context/UserInfo.tsx";
import { LinkContextProvider } from "./context/UserLink.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <LinkContextProvider>
          <App />
        </LinkContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
