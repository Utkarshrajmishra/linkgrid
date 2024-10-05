import { ColorRing } from "react-loader-spinner";
import { Input } from "./ui/input";
import { useState } from "react";

const Username = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="flex flex-col justify-center items-center w-[300px] md:w-full md:px-14  gap-8 font-inter">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="md:text-6xl text-center text-4xl font-inter font-[650] tracking-[-1px]">
          Welcome to Linktree!
        </h1>
        <p className="text-zinc-600 text-center">
          Choose your Linktree username. You can always change it later.
        </p>
      </div>
      <form className="w-full  flex flex-col gap-8">
        <div>
          <Input
            type="text"
            placeholder="linkgrid/username"
            className="h-12 bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
        </div>
        <p className="text-center text-zinc-600">
          By continuing, you agree to receive offers, news and updates from
          Linktree.
        </p>
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
            "Continue"
          )}
        </button>
      </form>
    </section>
  );
};

export default Username;
