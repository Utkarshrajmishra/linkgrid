import { Input } from "./ui/input";
import { Icons } from "@/constants/Icons";
const LinkInput = () => {
  return (
    <div className="flex gap-3">
      <img
        src={Icons[0].icon}
        alt=""
        className="w-12 h-12 rounded-xl"
      />
      <Input
        type="text"
        placeholder="Input your Instagram username"
        className="h-12 font-inter bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 w-[300px] shadow-none"
      />
    </div>
  );
};

export default LinkInput;
