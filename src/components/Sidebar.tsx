import { Setting } from "@/constants/Setting";
import Logo from "../assets/image/black-logo.png";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div className=" bg-stone-50 p-5 h-[100vh] flex flex-col justify-between border-r border-gray-400">
      <div className="flex flex-col gap-5 mt-1">
        <img
          src={Logo}
          alt="Logo"
          className="h-6 w-6 mb-2 hidden md:inline-block"
        />
        {Setting.map((item) => (
          <div
            key={item.id}
            className="flex hover:text-purple-800  gap-4 items-center"
          >
            <item.icons fontSize={25} />
            <p className="text-sm font-[500]  hover:text-purple-800">
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
