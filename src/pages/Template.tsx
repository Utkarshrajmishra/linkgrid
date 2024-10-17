import Progress from "@/components/Progress";
import { useNavigate } from "react-router-dom";
import { TemplateImages } from "@/constants/TemplateImage";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";

const Template = () => {
  const [isLoading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Number>(-1);
  const email = getAuth().currentUser?.email;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const databaseRef = doc(
        db,
        "UserTemplates",
        `utkarshrajmishra811545@gmail.com`
      );
      await setDoc(databaseRef, {
        template: selectedTemplate,
      });
      console.log("Template added");
      navigate("/social");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
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
            {isLoading ? (
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
        </section>
      </div>
      ;
    </>
  );
};
export default Template;
