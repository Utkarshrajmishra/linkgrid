import { useForm } from "react-hook-form";
import GithubBtn from "./Github-btn";
import GoogleBtn from "./Google-Btn";
import { Input } from "./ui/input";
import { authSchema } from "@/zod-schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import app from "@/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FC, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

interface SignupProps {
  authSwitcher: (value: boolean) => void;
}

const Signup:FC<SignupProps>= ({authSwitcher}:SignupProps) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  const navigate = useNavigate();

  const signInUser = async (data: any): Promise<void> => {
    try {
      setLoading(true);
      const auth = getAuth(app);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User signed in successfully:", userCredentials);
      if (userCredentials) navigate("/auth/registration",{state:{email:data.email}});
    } catch (error: any) {
      console.error("Error signing in:", error.message || error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col justify-center items-center w-[300px] md:w-full md:px-14  gap-4 font-inter">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="md:text-6xl text-center text-4xl font-inter font-[650] tracking-[-1px]">
          Join LinkGrid
        </h1>
        <p className="text-zinc-600 ">Sign up for free!</p>
      </div>
      <form
        onSubmit={handleSubmit(signInUser)}
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
          className="font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-3xl"
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
            "Sign Up"
          )}
        </button>
      </form>
      <p className="text-zinc-600">OR</p>
      <section className="flex items-center flex-col gap-4 w-[100%]">
        <GoogleBtn />
        <GithubBtn />
        <p className="text-zinc-600 ">
          Already have an account?{" "}
          <span onClick={()=>authSwitcher(false)} className="text-purple-600 underline cursor-pointer">
           Log in
          </span>
        </p>
      </section>
    </section>
  );
};

export default Signup;
