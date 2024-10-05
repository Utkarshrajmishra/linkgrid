import Logo from "../assets/image/logo.png";
import Username from "@/components/Username";
const Register = () => {
  return (
    <div className="flex min-h-screen">
      <section className="md:w-[60%] w-full  p-4 md:p-6 flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-inter text-2xl tracking-tighter font-medium">
            LinkGrid
          </p>
          <img src={Logo} alt="" className="w-5" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Username />
        </div>
      </section>
      <div className="bg-purple-500 hidden md:block md:w-[40%]"></div>
    </div>
  );
};
export default Register;
