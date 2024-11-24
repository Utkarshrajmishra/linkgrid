import { linkInputContext } from "@/context/Providers"
import { useContext, useState } from "react"
import { Icons } from "@/constants/Icons"
import { ColorRing } from "react-loader-spinner"
import { Button } from "./ui/button"
const SocialInput=()=>{
    const {provider,setProvider}=useContext(linkInputContext)
    const [loading,setLoading]=useState(false)
    

    return (
      <div className="flex flex-col gap-4 p-2 font-inter overflow-x-auto">
        {provider.providersIndex?.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img
              src={Icons[Number(item)].icon}
              alt={Icons[Number(item)].title}
              width={40}
            />
            <input
              type="text"
              placeholder="Input your profile link"
              className="h-10 text-sm pl-2 font-inter bg-zinc-100 focus:outline-black outline outline-1 outline-zinc-500 rounded w-full shadow-none"
            />
          </div>
        ))}
        <Button
          type="submit"
          className="font-inter mt-2 bg-purple-600 hover:bg-purple-700"
        >
          {loading ? (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            />
          ) : (
            "Log In"
          )}
        </Button>
      </div>
    );
}

export default SocialInput