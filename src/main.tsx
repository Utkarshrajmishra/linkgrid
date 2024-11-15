import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./context/UserInfo.tsx";
import { AuthContextProvider } from "./context/Auth.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
