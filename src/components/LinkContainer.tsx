import { FC, useContext } from "react";
import { Switch } from "./ui/switch";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaPenSolid } from "react-icons/lia";
import { PiChartLine } from "react-icons/pi";
import { LinkTypes } from "@/types/Types";
import { Icons } from "@/constants/Icons";
import { UserContext } from "@/context/UserInfo";
import { deleteLink, deleteSocials } from "@/database/LinkContainer-Edit";
import { UserLinkContext } from "@/context/UserLink";

interface Link {
  link: string;
  show: boolean;
  title: string;
  totalClicks: number;
}

interface LinkContainerProps {
  setFormData:(data:LinkTypes) =>void;
  formData:LinkTypes;
  setIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
  type: string;
  index: Number | null;
  data: LinkTypes | null;
  provider: Number | null;
  link: Link | null;
}

const LinkContainer: FC<LinkContainerProps> = ({
  setFormData,
  formData,
  type,
  index,
  data,
  provider,
  link,
}: LinkContainerProps) => {
  const { userData, setUserData } = useContext(UserContext);
  const { userLink, setUserLink } = useContext(UserLinkContext);
  const handleDelete = async () => {
    if (type === "userInfo") {
      const provider = [...userData.soicalProviders];
      const link = [...userData.socialLink];
      provider.splice(Number(index), 1);
      link.splice(Number(index), 1);
      try {
        const response = await deleteSocials(provider, link, userData);

        if (response && response?.status) {
          console.log("Link deleted successfully.");
          setUserData({
            ...userData,
            soicalProviders: provider,
            socialLink: link,
          });
        } else {
          console.error("Error deleting link:", response.msg);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const temp = [...userLink];
      temp.splice(Number(index), 1);
      try {
        const response = await deleteLink(null, temp, null);
        if (response && response?.status) {
          setUserLink(temp);
        } else {
          console.error("Error deleting link:", response.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  const handleEdit=()=>{
      
  }

  return (
    <div className="w-full font-inter flex flex-col gap-3 h-fit p-4 bg-white outline outline-1 outline-gray-400 rounded-xl">
      <div className="flex  items-center justify-between">
        <div className="flex flex-col gap-1">
          <div>
            <p className="font-semibold">
              {provider != null && data != null
                ? Icons[Number(provider)].title
                : link?.title}
            </p>
          </div>

          <div>
            <a
              target="_blank"
              href={provider != null && data != null ? data.link : link?.link}
              className="text-sm underline text-blue-700"
            >
              {provider != null && data != null ? data.link : link?.link}
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-3  gap-3">
        <Switch
          checked={provider != null && data != null ? data.show : link?.show}
        />
        <AiOutlineDelete
          onClick={handleDelete}
          fontSize={22}
          className="cursor-pointer text-stone-700"
        />
        <PiChartLine fontSize={22} className="cursor-pointer text-stone-700" />
        <LiaPenSolid onClick={handleEdit} fontSize={22} className="cursor-pointer text-stone-700" />
      </div>

      {/* <button className=" w-full font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-8 rounded-3xl">
        Update
      </button> */}
    </div>
  );
};

export default LinkContainer;
