import Progress from "@/components/Progress";
const Template = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] mt-10  w-full items-center p-4 md:p-6 flex flex-col gap-8">
          <Progress/>

          <h1 className="text-5xl font-[900] font-inter">Select a Template</h1>
          <p className="font-inter text-zinc-500">
            Pick the style that feels right - you can add your content later
          </p>
        </section>
      </div>
    </>
  );
};
export default Template;
