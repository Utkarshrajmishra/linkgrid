import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Template from "./pages/Template";
import Social from "./pages/Social"; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/template" element={<Template/>} />
        <Route path="/auth/registration" element={<Register />} />
        <Route path="/social" element={<Social/>} />
      </Routes>
    </>
  );
}

export default App;
