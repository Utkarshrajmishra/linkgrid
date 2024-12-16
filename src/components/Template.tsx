import { UserContext } from "@/context/UserInfo";
import { useContext } from "react";
import { Templates } from "@/constants/Template";
import TemplateIcons from "./TemplateIcons";
import { UserLinkContext } from "@/context/UserLink";

const Template = () => {
  const { userData } = useContext(UserContext);
  const { userLink } = useContext(UserLinkContext);

  // Ensure both userData and userLink exist before rendering
  if (!userData || !userLink) return <p>Loading</p>;

  // Use a default index or the first template if not specified
  const templateIndex = 0;

  return (
    <div>
      <div
        className={`gap-3 h-[550px] w-[330px] rounded-md ${Templates[templateIndex].bgColor} ${Templates[templateIndex].textColor} ${Templates[templateIndex].outline} font-inter flex items-center flex-col`}
      >
        <div className="flex gap-2 items-center flex-col mt-6">
          <div className="rounded-full h-20 w-20 bg-white"></div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-[1.18rem]">{userData.name}</p>
            <p className="text-sm text-zinc-200">{userData.bio}</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-2 px-10 overflow-x-auto">
          {userData.soicalProviders.map((providerId, index) => (
            <a key={index} href={userData.socialLink[index]?.link}>
              <TemplateIcons
                index={0}
                fontSize={22}
                color={Templates[templateIndex].iconColor}
              />
            </a>
          ))}
        </div>

        <div className="w-full flex-col px-5 flex gap-4 overflow-y-scroll pb-1">
          {userLink.map((item, index) => (
            <div
              key={index}
              className={`
                ${Templates[templateIndex].containerBgColor} 
                w-[100%] py-1 flex justify-center rounded-2xl 
                ${Templates[templateIndex].shadow}
              `}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;
