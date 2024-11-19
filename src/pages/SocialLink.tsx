import Progress from "@/components/Progress";
import LinkInput from "@/components/Link-input";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context/UserInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { LinkTypes } from "@/types/Types";

import { getAuth } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
const SocialLink = () => {
  const auth=getAuth();
  const email=auth.currentUser?.email;
  const { userData, setUserData } = useContext(UserContext);
  const [links, setLinks] = useState<LinkTypes[]>([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    if (userData?.soicalProviders) {
      setLinks(new Array(userData.soicalProviders.length).fill(""));
    }
  }, [userData]);

    const handleClick = () => {
      const updatedData = { ...userData, socialLink: links };
      console.log("Before updating userData", userData);
      console.log("Updated data:", updatedData);

      // Update userData in context
      setUserData(updatedData);

      // Submit the updated data to Firebase
      submitData(updatedData); // Pass the updated data here
    };

    const submitData = async (data: typeof userData) => {
      setLoading(true);
      try {
        await setDoc(doc(db, "userInfo", `${email}`), data); // Use the updated data
        console.log("Data submitted successfully", data);
        
      } catch (error) {
        console.log("Error submitting data:", error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="md:w-[60%] w-full mt-4 items-center p-4 md:px-10 flex flex-col gap-10">
        <Progress />
        <LinkInput setLinks={setLinks} links={links} />

        <button
          type="submit"
          //disabled={loading}
          onClick={handleClick}
          className="font-semibold md:mt-20 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 md:w-[500px] w-full rounded-3xl"
        >
          {
            loading?
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
          ):
          "Continue"
          }
        </button>
      </section>
    </div>
  );
};

export default SocialLink;
