import { Setting } from "@/constants/Setting";
import { getAuth } from "firebase/auth";
import Logo from "../assets/image/black-logo.png";
const Sidebar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  return (
    <div className=" bg-stone-50 p-5 h-[100vh] flex flex-col justify-between border-r border-gray-400">
      <div className="flex flex-col gap-5 mt-1">
        <img
          src={Logo}
          alt="Logo"
          className="h6 w-6 mb-2 hidden md:inline-block"
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

      <div className="flex gap-3 items-center ">
        <div className="h-12 w-12 rounded-full bg-zinc-400"></div>
        <p className="font-semibold">@utkarsh_075</p>
      </div>
    </div>
  );
};

export default Sidebar;
