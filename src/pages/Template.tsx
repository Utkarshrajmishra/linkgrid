import Progress from "@/components/Progress";
import Image1 from "../assets/image/template1.png";
import Image2 from "../assets/image/template2.png";
import Image3 from "../assets/image/template3.png";
const Template = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] justify-center   w-full items-center p-4 flex flex-col gap-8">
          <Progress />

          <h1 className="text-5xl font-[900] font-inter">Select a Template</h1>
          <p className="font-inter text-zinc-500">
            Pick the style that feels right - you can add your content later
          </p>
          <section className="flex gap-4 flex-wrap">
            <img src={Image1} className="w-[220px]  rounded-xl" />
            <img src={Image2} className="w-[220px] rounded-xl" />
            <img src={Image3} className="w-[220px] rounded-xl" />
          </section>
        </section>
      </div>
    </>
  );
};
export default Template;
