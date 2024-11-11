import Progress from "@/components/Progress";
import LinkInput from "@/components/Link-input";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context/UserInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";


import { getAuth } from "firebase/auth";
const SocialLink = () => {
  const auth=getAuth();
  const email=auth.currentUser?.email;
  console.log(email)
  const { userData, setUserData } = useContext(UserContext);
  const [links, setLinks] = useState<any>([]);

  useEffect(() => {
    if (userData?.soicalProviders) {
      setLinks(new Array(userData.soicalProviders.length).fill(""));
    }
  }, [userData]);

  const handleClick = () => {
    const data = { ...userData, socialLink : links}
    setUserData(data)
    submitData()
  };


  const submitData=async()=>{
    try {
      await setDoc(doc(db, "userInfo", `${email}`), userData);
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="md:w-[60%] w-full mt-4 items-center p-4 md:px-10 flex flex-col gap-10">
        <Progress />
        <LinkInput setLinks={setLinks} links={links} />

        <button
          type="submit"
          onClick={handleClick}
          className="font-semibold md:mt-20 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 md:w-[500px] w-full rounded-3xl"
        >
          Continue
        </button>
      </section>
    </div>
  );
};

export default SocialLink;
