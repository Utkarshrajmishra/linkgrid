import { Setting } from "@/constants/Setting";
import Logo from "../assets/image/black-logo.png";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div className=" bg-stone-50 p-4 h-[100vh] flex flex-col justify-between border-r border-gray-400">
      <div className="flex cursor-pointer flex-col gap-5 md:gap-0 mt-1">
        <img
          src={Logo}
          alt="Logo"
          className="h-6 w-6 mb-2 hidden md:inline-block"
        />
        {Setting.map((item) => (
          <div
            key={item.id}
            className={`flex hover:text-purple-800 md:hover:bg-neutral-100 rounded-md md:py-2 nd:px-1 w-full  gap-4 items-center`}
          >
            <item.icons fontSize={23} />
            <p className="text-sm font-[430]  hover:text-purple-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
