import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Auth from "./pages/Auth";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth/registration" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
