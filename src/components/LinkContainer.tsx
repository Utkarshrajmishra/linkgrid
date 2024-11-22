import { FC } from "react";
import { Switch } from "./ui/switch";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaPenSolid } from "react-icons/lia";
import { PiChartLine } from "react-icons/pi";
import { LinkTypes } from "@/types/Types";
import { Icons } from "@/constants/Icons";

interface Link{
   link: string;
  show: boolean;
  title: string;
  totalClicks: Number;
}

interface LinkContainerProps {
  data: LinkTypes | null;
  provider: Number | null;
  userLink: Link | null;
}

const LinkContainer: FC<LinkContainerProps> = ({
  data,
  provider,
  userLink
}: LinkContainerProps) => {
  return (
    <div className="w-full font-inter flex flex-col gap-3 h-fit p-4 bg-white outline outline-1 outline-gray-400 rounded-xl">
      <div className="flex  items-center justify-between">
        <div className="flex gap-2">
          <p className="font-semibold">
            {provider != null && data!=null ? Icons[Number(provider)].title : userLink?.title}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <p className="text-sm">{provider != null && data!=null?data.link: userLink?.link}</p>
      </div>
      <div className="flex  gap-3">
        <Switch checked={provider != null && data!=null? data.show: userLink?.show} />
        <AiOutlineDelete
          fontSize={22}
          className="cursor-pointer text-stone-700"
        />
        <PiChartLine fontSize={22} className="cursor-pointer text-stone-700" />
        <LiaPenSolid fontSize={22} className="cursor-pointer text-stone-700" />
      </div>

      {/* <button className=" w-full font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-8 rounded-3xl">
        Update
      </button> */}
    </div>
  );
};

export default LinkContainer;
