import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Logo from "../assets/image/logo.png";
import { useState } from "react";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="flex min-h-screen">
      <section className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-inter text-2xl tracking-tighter font-medium">
            LinkGrid
          </p>
          <img src={Logo} alt="" className="w-5" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          {signUp ? (
            <Signup authSwitcher={setSignUp} />
          ) : (
            <Login authSwitcher={setSignUp} />
          )}
        </div>
      </section>
      <div className="bg-gradient-to-tr from-green-500 to-teal-500 hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default Auth;
