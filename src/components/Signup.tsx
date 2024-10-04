import GithubBtn from "./Github-btn";
import GoogleBtn from "./Google-Btn";
import { Input } from "./ui/input";

const Signup = () => {
  return (
    <section className="flex flex-col justify-center items-center w-[300px] md:w-full md:px-14  gap-4 font-inter">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="md:text-6xl text-center text-4xl font-inter font-[650] tracking-[-1px]">
          Join LinkGrid
        </h1>
        <p className="text-zinc-600 ">Sign up for free!</p>
      </div>
      <form className="w-full flex flex-col gap-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            className="h-12 bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            className="h-12 bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
        </div>
        <button
          type="submit"
          className="font-semibold bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-3xl"
        >
          Log In
        </button>
      </form>
      <p className="text-zinc-600">OR</p>
      <section className="flex items-center flex-col gap-4 w-[100%]">
        <GoogleBtn />
        <GithubBtn />
        <p className="text-zinc-600 ">
          Already have an account?{" "}
          <span className="text-purple-600 underline">Log in</span>
        </p>
      </section>
    </section>
  );
};

export default Signup;
