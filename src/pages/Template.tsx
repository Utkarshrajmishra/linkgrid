import Progress from "@/components/Progress";
import { useNavigate } from "react-router-dom";
import { TemplateImages } from "@/constants/TemplateImage";
import { useContext } from "react";
import { UserContext } from "@/context/UserInfo";
import { useState } from "react";

const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Number>(-1);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = () => {
    setUserData({ ...userData, template: String(selectedTemplate) });
    navigate("/social");
  };
  
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
            {TemplateImages?.map((image, index) => (
              <div key={image.id}>
                <img
                  src={image.image}
                  className={`w-[220px]  rounded-xl ${
                    index == selectedTemplate
                      ? "outline outline-2 outline-zinc-800"
                      : ""
                  }`}
                  onClick={() => setSelectedTemplate(index)}
                />
              </div>
            ))}
          </section>

          <button
            onClick={handleSubmit}
            disabled={selectedTemplate == -1}
            className={`font-semibold   flex items-center justify-center  text-white h-12 md:w-[500px] w-full rounded-3xl ${
              selectedTemplate != -1
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-400"
            }`}
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
