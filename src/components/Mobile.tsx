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
      className={`flex h-[100vh] w-[100%]  md:w-[100vw] justify-center min-h-screen p-4  ${Templates.green.bgColor}`}
    >
      <div
        className={`w-full ${Templates.green.textColor} md:w-[55%]  overflow-x-hidden gap-4 flex-col flex items-center `}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={Profile} alt="" className="w-20 h-20 mt-6" />
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-3xl font-inter font-semibold">
              Olivia Wilde
            </p>
            <p className="font-inter text-sm md:text-md">
              Happiness never goes out of style
            </p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 mt-2 justify-center">
          <FaInstagram className="text-[25px] text-[Templates.green.iconColor]  md:text-[30px]" />
          <FaWhatsapp className="text-[25px] text-[Templates.green.iconColor] md:text-[30px]" />
          <FaTiktok className="text-[25px] text-[Templates.green.iconColor]  md:text-[30px]" />
          <FaFacebook className="text-[25px] text-[Templates.green.iconColor]  md:text-[30px]" />
          <FaSnapchatGhost className="text-[25px] text-[Templates.green.iconColor]  md:text-[30px]" />
        </div>
        <div
          className={`flex font-inter mt-2 flex-col items-center ${Templates.green.textColor} gap-4 w-full  overflow-scroll p-1`}
        >
          <div
            className={`text-sm ${Templates.green.shadow} ${Templates.green.outline} ${Templates.green.containerBgColor} cursor-pointer  p-[12px] rounded-2xl flex justify-center w-full`}
          >
            <p>Latest Youtube Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
