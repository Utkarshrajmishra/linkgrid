import { FC, useContext, useState } from "react";
import GithubBtn from "./Github-btn";
import GoogleBtn from "./Google-Btn";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/zod-schema/schema";
import { useForm } from "react-hook-form";
import app from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/Auth";

interface LoginProps {
  authSwitcher: (value: boolean) => void;
}

const Login: FC<LoginProps> = ({ authSwitcher }: LoginProps) => {
  const {setAuth}=useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  const navigation=useNavigate()
  const logIn = async (data: any): Promise<void> => {
    try {
      setLoading(true);
      const auth = getAuth(app);
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      setAuth({
        isLogin:true,
        userEmail:data.email,
      })
      
      if(user)
      navigation('/admin')

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-[300px] md:w-full md:px-14  gap-4 font-inter">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="md:text-6xl text-center text-4xl font-inter font-[650] tracking-[-1px]">
          Welcome back!
        </h1>
        <p className="text-zinc-600 ">Log in to your LinkGrid</p>
      </div>
      <form
        onSubmit={handleSubmit(logIn)}
        className="w-full flex flex-col gap-4"
      >
        <div>
          <Input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="h-12 bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {String(errors.email.message)}
            </p>
          )}
        </div>
        <div>
          <Input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="h-12 bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              {String(errors.password.message)}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="font-semibold bg-purple-600 flex items-center justify-center hover:bg-purple-700 text-white h-12 rounded-3xl"
        >
          {loading ? (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            />
          ) : (
            "Log In"
          )}
        </button>
      </form>
      <p className="text-zinc-600">OR</p>
      <section className="flex items-center flex-col gap-4 w-[100%]">
        <GoogleBtn />
        <GithubBtn />
        <p className="text-zinc-600 ">
          Don't have an account?{" "}
          <span
            onClick={() => authSwitcher(true)}
            className="text-purple-600 underline cursor-pointer"
          >
            Sign up
          </span>{" "}
        </p>
      </section>
    </section>
  );
};

export default Login;
