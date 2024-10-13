import Progress from "@/components/Progress";
import LinkInput from "@/components/Link-input";
import { useContext } from "react";

const SocialLink = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] w-full mt-4 items-center p-4 md:px-10 flex flex-col gap-10">
          <Progress />
          <LinkInput />

          <button
            type="submit"
            className="font-semibold md:mt-20  flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 md:w-[500px] w-full rounded-3xl"
          >
            Continue
          </button>
        </section>
      </div>
    </>
  );
};

export default SocialLink;
