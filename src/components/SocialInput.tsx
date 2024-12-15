import { linkInputContext } from "@/context/Providers"
import { FC, useContext, useState } from "react"
import { Icons } from "@/constants/Icons"
import { ColorRing } from "react-loader-spinner"
import { Button } from "./ui/button"
import { LinkTypes } from "@/types/Types"
import { UserContext } from "@/context/UserInfo"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"

interface SocialInputProps{
    setOpen:(open:boolean)=>void
}

const SocialInput:FC<SocialInputProps>=({setOpen}:SocialInputProps)=>{
    const { userData, setUserData } = useContext(UserContext);
    const {provider, setProvider}=useContext(linkInputContext)
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState<LinkTypes[]>([])

    const handleChange=(e:any,index:Number)=>{
        const temp=[...data]
        temp[Number(index)]={
            link: e.target.value,
            show: true,
            totalClicks: 0,
            title:""
        }
        setData(temp)
    }

    const handleSubmit=async()=>{
        setLoading(true)
        let sessionData = sessionStorage.getItem("Auth")
        let dataEmail=sessionData? JSON.parse(sessionData) : " "
        const providerArr=[...userData.soicalProviders, ...provider.providersIndex]
        const linkArr=[...userData.socialLink, ...data]
        setUserData({...userData, soicalProviders:  providerArr, socialLink: linkArr})
        try {
            await setDoc(
              doc(db, "userInfo", `${dataEmail.email}`),
              userData
            );
            setProvider({...provider, providersIndex:[]})
            console.log("success")
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
        finally{
            console.log(userData)
            setLoading(false)
        }

    }



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
             onChange={(e)=>handleChange(e,index)}
              type="text"
              placeholder="Input your profile link"
              className="h-10 text-sm pl-2 font-inter bg-zinc-100 focus:outline-black outline outline-1 outline-zinc-500 rounded w-full shadow-none"
            />
          </div>
        ))}
        <Button
          type="submit"
          onClick={handleSubmit}
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
            "Submit"
          )}
        </Button>
      </div>
    );
}

export default SocialInput