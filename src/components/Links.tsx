import { FC, useContext } from "react";
import LinkContainer from "./LinkContainer";
import { AiOutlinePlus } from "react-icons/ai";
import { UserContext } from "@/context/UserInfo";
import { UserLinkContext } from "@/context/UserLink";

interface LinkProps{
  setOpen:(open:boolean)=>void,
}

const Links:FC<LinkProps> = ({setOpen}:LinkProps) => {
  const {userData}=useContext(UserContext)
  const {userLink}=useContext(UserLinkContext)
  return (
    <div className="md:w-[60%] h-[100vh] flex flex-col gap-8 md:p-8 p-4 w-full overflow-scroll bg-stone-50 border-r border-gray-400">
      <button
        onClick={() => setOpen(true)}
        className="gap-1 w-full font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-3xl"
      >
        <AiOutlinePlus />Add
      </button>
      {userData.bio &&
        userData.socialLink.map((item, index) => (
          <LinkContainer
            type={"userInfo"}
            index={index}
            data={item}
            provider={userData.soicalProviders[index]}
            link={null}
          />
        ))
}
 
    {
      userLink &&
      userLink.map((item,index)=>(
                <LinkContainer type={"userLink"} index={index} data={null}  provider={null} link={item}/>

      ))

      }
     
    </div>
  );
};

export default Links;
