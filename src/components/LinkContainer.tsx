import { FC, useContext } from "react";
import { Switch } from "./ui/switch";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaPenSolid } from "react-icons/lia";
import { PiChartLine } from "react-icons/pi";
import { LinkTypes } from "@/types/Types";
import { Icons } from "@/constants/Icons";
import { UserContext } from "@/context/UserInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

interface Link {
  link: string;
  show: boolean;
  title: string;
  totalClicks: Number;
}

interface LinkContainerProps {
  index: Number | null;
  data: LinkTypes | null;
  provider: Number | null;
  userLink: Link | null;
}

const LinkContainer: FC<LinkContainerProps> = ({
  index,
  data,
  provider,
  userLink,
}: LinkContainerProps) => {
  const { userData, setUserData } = useContext(UserContext);
  const user = sessionStorage.getItem("Auth")
    ? JSON.parse(sessionStorage.getItem("Auth")!)
    : null;

  const handleDelete = async () => {
    const provider = [...userData.soicalProviders];
    const link = [...userData.socialLink];
    provider.splice(Number(index), 1);
    link.splice(Number(index), 1);
    try {
      if (user && user.email) {
        const docRef = doc(db, "userInfo", `${user.email}`);
        await setDoc(docRef, {
          username: userData.username,
          template: userData.template,
          bio: userData.bio,
          name: userData.name,
          soicalProviders: userData.soicalProviders,
          socialLink: userData.socialLink,
          profileImage: userData.profileImage,
        });
        setUserData({
          ...userData,
          soicalProviders: provider,
          socialLink: link,
        });
        console.log("Data updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full font-inter flex flex-col gap-3 h-fit p-4 bg-white outline outline-1 outline-gray-400 rounded-xl">
      <div className="flex  items-center justify-between">
        <div className="flex gap-2">
          <p className="font-semibold">
            {provider != null && data != null
              ? Icons[Number(provider)].title
              : userLink?.title}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          target="_blank"
          href={provider != null && data != null ? data.link : userLink?.link}
          className="text-sm underline"
        >
          {provider != null && data != null ? data.link : userLink?.link}
        </a>
      </div>
      <div className="flex  gap-3">
        <Switch
          checked={
            provider != null && data != null ? data.show : userLink?.show
          }
        />
        <AiOutlineDelete
          onClick={handleDelete}
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
