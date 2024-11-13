import template from "../assets/image/template2.png";

const Preview = () => {
  return (
    <div className=" h-[100vh] w-[100%] flex items-center justify-center">
      <img src={template} alt="" className="w-[250px] h-[400px]" />
    </div>
  );
};

export default Preview;
