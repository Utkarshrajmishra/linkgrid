import Progress from "@/components/Progress";
import { Icons } from "@/constants/Icons";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserInfo";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";
const Social = () => {

  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)
  const {userData,setUserData}=useContext(UserContext)
  const [providers,setProviders]=useState<Number[]>([])



  const handleClick=(index:Number)=>{
    let temp:Number[];
    if(providers.includes(index)) {
      const indx=providers.indexOf(index)
      temp=[...providers];
      temp.splice(indx,1)
    }
    else{
     temp=[...providers,index]
    }
    setProviders(temp)
    console.log(temp)
  }

  const handleSubmit=async()=>{
    setLoading(false)
    setUserData({...userData,soicalProviders:providers})
    try {
      const docRef=doc(db,"UserSocialProviders","utkarshrajmishra811545@gmail.com");
      await setDoc(docRef,{
        socialProviders:providers
      })
      navigate("/social/links");
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(true)
    }
  }
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <section className="md:w-[60%] w-full mt-4 items-center p-4 flex flex-col gap-10">
          <Progress />

          <h1 className="md:text-5xl text-4xl font-[900] font-inter text-center">
            Select your Socials
          </h1>
          <p className="font-inter text-zinc-500 text-center">
            Pick the style that feels right - you can add your content later`
          </p>
          <section className="grid grid-cols-3 md:grid-cols-5 md:gap-14 gap-10">
            {Icons?.map((item, index) => (
              <div onClick={()=>handleClick(index)} className={`cursor-pointer ${(providers.includes(index))?"outline outline-1 outline-black":"outline-none"} w-[86px] h-[90px] justify-center rounded-md bg-zinc-200 flex flex-col items-center gap-1`}>
                <img
                  key={index}
                  src={item.icon}
                  alt=""
                  className="w-9 h-9 rounded-xl"
                />
                <p className="text-[0.85rem] text-inter text-zinc-500">
                  {item.title}
                </p>
              </div>
            ))}
          </section>
          <button
            onClick={handleSubmit}
            className="font-semibold md:mt-20  flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 md:w-[500px] w-full rounded-3xl"
          >
            {loading?
            (
             <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            />
          ): "Continue"}
          </button>
        </section>
      </div>
    </>
  );
};

export default Social;
