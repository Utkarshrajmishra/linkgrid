import { useContext } from "react";
import { Input } from "./ui/input";
import { Icons } from "@/constants/Icons";
import { UserContext } from "@/context/UserInfo";
const LinkInput = () => {
  const {userData,setUserData}=useContext(UserContext)
  //console.log(`userData ${typeof userData.soicalProviders}`)
  return (
    <>
      {userData.soicalProviders.map((item) => (
        <div className="flex gap-3">
          <img
            src={Icons[Number(item)].icon}
            alt=""
            className="w-12 h-12 rounded-xl"
          />
          <Input
            type="text"
            placeholder={Icons[Number(item)].message}
            className="h-12 font-inter bg-zinc-100 outline outline-0 hover:outline-1 outline-zinc-400 w-[300px] shadow-none"
          />
        </div>
      ))}
    </>
  );
};

export default LinkInput;
