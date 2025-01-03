import { UserContext } from "@/context/UserInfo";
import { useContext } from "react";
import { Templates } from "@/constants/Template";
import TemplateIcons from "./TemplateIcons";
import { UserLinkContext } from "@/context/UserLink";

const Template = () => {
  const { userData } = useContext(UserContext);
  const { userLink } = useContext(UserLinkContext);
  console.log(userData)
  // Ensure both userData and userLink exist before rendering
  if (!userData || !userLink) return <p>Loading</p>;

  // Use a default index or the first template if not specified
  const templateIndex = 0;

  return (
    <div>
      <div
        className={`gap-4  h-[550px] w-[330px] rounded-xl ${Templates[templateIndex].bgColor} ${Templates[templateIndex].textColor} ${Templates[templateIndex].outline} font-inter flex items-center flex-col`}
      >
        <div className="flex gap-2 items-center flex-col mt-6">
          <div className="rounded-full h-[68px] w-[68px] bg-white"></div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-[1.18rem]">{userData.name}</p>
            <p className="text-sm text-zinc-200">{userData.bio}</p>
          </div>
        </div>
        
        {/* Socials */}
        <div className="flex gap-2 px-10 overflow-x-auto">
          {userData.soicalProviders.map((item, index) => (
            <>
              <a key={index} href={userData.socialLink[index]?.link}>
                <TemplateIcons
                  index={Number(item)}
                  fontSize={22}
                  color={Templates[templateIndex].iconColor}
                />
              </a>
                        </>
          ))}
        </div>

        <div className="w-full pb-4 flex-col px-5 flex gap-4 overflow-y-scroll ">
          {userLink.map((item, index) => (
            <div
              key={index}
              className={`
                ${Templates[templateIndex].containerBgColor} 
                w-[100%] py-[7px] flex justify-center rounded-2xl 
                ${Templates[templateIndex].shadow}
              `}
            >
              <p className="text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;
