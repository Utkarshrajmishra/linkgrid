import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Template from "./pages/Template";
import Social from "./pages/Social";
import SocialLink from "./pages/SocialLink";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/template" element={<Template />} />
        <Route path="/auth/registration" element={<Register />} />
        <Route path="/social" element={<Social />} />
        <Route path="/social/links" element={<SocialLink />} />
        <Route path="/admin" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
