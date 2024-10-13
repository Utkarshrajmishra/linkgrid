import Progress from "@/components/Progress";
import Image1 from "../assets/image/template1.png";
import Image2 from "../assets/image/template2.png";
import Image3 from "../assets/image/template3.png";
import { useNavigate } from "react-router-dom";
const Template = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] w-full mt-4 items-center p-4 flex flex-col gap-8">
          <Progress />
          <h1 className="md:text-5xl text-4xl font-[900] font-inter text-center">
            Select a Template
          </h1>
          <p className="font-inter text-zinc-500 text-center">
            Pick the style that feels right - you can add your content later
          </p>
          <section className="flex gap-4 flex-wrap">
            <img src={Image1} className="w-[220px]  rounded-xl" />
            <img src={Image2} className="w-[220px] rounded-xl" />
            <img src={Image3} className="w-[220px] rounded-xl" />
          </section>

          <button
            onClick={() => navigate("/social")}
            className="font-semibold   flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 md:w-[500px] w-full rounded-3xl"
          >
            Continue
          </button>
        </section>
      </div>
      ;
    </>
  );
};
export default Template;
