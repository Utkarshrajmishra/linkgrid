import Progress from "@/components/Progress";
import { Icons } from "@/constants/Icons";

const Social = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] w-full mt-4 items-center p-4 flex flex-col gap-10">
          <Progress />

          <h1 className="md:text-5xl text-4xl font-[900] font-inter text-center">
            Select a Template
          </h1>
          <p className="font-inter text-zinc-500 text-center">
            Pick the style that feels right - you can add your content later
          </p>
          <section className="grid grid-cols-3 md:grid-cols-5 md:gap-14 gap-10">
            {Icons?.map((item, index) => (
              <div className="w-[86px] h-[90px] justify-center rounded-md bg-slate-200 flex flex-col items-center gap-1">
                <img
                  key={index}
                  src={item.icon}
                  alt=""
                  className="w-9 h-9 rounded-xl"
                />
                <p className="text-[0.85rem] text-inter">{item.title}</p>
              </div>
            ))}
          </section>
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

export default Social;
