import { FC, useContext, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Icons } from "@/constants/Icons";
import { UserContext } from "@/context/UserInfo";

interface LinkInputProps {
  setLinks: (links: Array<string>) => void;
  links: Array<string>;
}

const LinkInput: FC<LinkInputProps> = ({ setLinks, links }) => {
  const { userData } = useContext(UserContext);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedLinks = [...links];
    updatedLinks[index] = e.target.value;
    setLinks(updatedLinks);
  };

  return (
    <>
      {userData?.soicalProviders?.map((item: any, index: number) => (
        <div key={index} className="flex gap-3 items-center">
          <img
            src={Icons[item]?.icon}
            alt=""
            className="w-12 h-12 rounded-xl"
          />
          <Input
            type="text"
            onChange={(e) => handleInput(e, index)}
            placeholder={Icons[item]?.message}
            className="h-12 font-inter bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 w-[300px] shadow-none"
          />
        </div>
      ))}
    </>
  );
};

export default LinkInput;
