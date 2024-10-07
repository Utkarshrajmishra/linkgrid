import Profile from "../assets/image/image2.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaSnapchatGhost,
  FaFacebook,
} from "react-icons/fa";
import { Templates } from "@/constants/Template";

const Mobile = () => {
  return (
    <div
      className={`flex h-[100vh] w-[100%] md:w-[375px] justify-center min-h-screen p-4 ${Templates.light.bgColor}`}
    >
      <div
        className={`w-full ${Templates.light.textColor}  overflow-x-hidden gap-4 flex-col flex items-center `}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={Profile} alt="" className="w-20 h-20 mt-6" />
          <div className="flex flex-col items-center">
            <p className="text-xl font-inter font-semibold">Olivia Wilde</p>
            <p className="font-inter text-sm md:text-md">
              Happiness never goes out of style
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-2 justify-center">
          <FaInstagram color={Templates.light.iconColor} fontSize={22} />
          <FaWhatsapp color={Templates.light.iconColor} fontSize={22} />
          <FaTiktok color={Templates.light.iconColor} fontSize={22} />
          <FaFacebook color={Templates.light.iconColor} fontSize={22} />
          <FaSnapchatGhost color={Templates.light.iconColor} fontSize={22} />
        </div>
        <div
          className={`flex font-inter mt-2 flex-col items-center ${Templates.light.textColor} gap-4 w-full  overflow-scroll p-1`}
        >
          <div
            className={`text-sm ${Templates.light.shadow} ${Templates.light.outline} ${Templates.light.containerBgColor} cursor-pointer  p-[10px] rounded-2xl flex justify-center w-full`}
          >
            <p>Latest Youtube Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
