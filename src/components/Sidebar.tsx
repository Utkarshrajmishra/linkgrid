import { Setting } from "@/constants/Setting";
import { getAuth } from "firebase/auth";

const Sidebar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  return (
    <div className="w-[16%] bg-stone-50 p-5 h-[100vh] flex flex-col justify-between border-r border-gray-400">
      <div className="flex flex-col gap-5">
        {Setting.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <item.icons fontSize={25} />
            <p className="text-sm text-neutral-800">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center ">
        <div className="h-12 w-12 rounded-full bg-zinc-400"></div>
        <p className="font-semibold">@utk_075</p>
      </div>
    </div>
  );
};

export default Sidebar;
