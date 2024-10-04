import Login from "@/components/Login";
import Logo from "../assets/image/logo.png";

const Auth = () => {

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
          <Login />
        </div>
      </section>
      <div className="bg-gradient-to-tr from-green-500 to-teal-500 hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default Auth;
