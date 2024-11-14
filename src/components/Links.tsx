import { FC } from "react";
import LinkContainer from "./LinkContainer";
import { AiOutlinePlus } from "react-icons/ai";

interface LinkProps{
  setOpen:(open:boolean)=>void,
}

const Links:FC<LinkProps> = ({setOpen}:LinkProps) => {
  return (
    <div className="md:w-[60%] h-[100vh] flex flex-col gap-8 md:p-8 p-4 w-full overflow-scroll bg-stone-50 border-r border-gray-400">
      <button onClick={()=>setOpen(true)} className=" w-full font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-3xl">
        <AiOutlinePlus /> Add
      </button>
      <LinkContainer />
      <LinkContainer />
      <LinkContainer />
      <LinkContainer />
    </div>
  );
};

export default Links;
