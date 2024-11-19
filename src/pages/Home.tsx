import Sidebar from "@/components/Sidebar";
import BottonNav from "@/components/BottomNav";
import Links from "@/components/Links";
import Preview from "@/components/Preview";
import DialogComp from "@/components/Dialog";
import { useState, useEffect, useContext } from "react";
import { AlertDialogComp } from "@/components/Alert";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from "@/context/UserInfo";
import { UserInfoTypes } from "@/types/Types";

const Home = () => {
  const { setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [openDialog, setDilogOpen] = useState<boolean>(false);
  const [data, setData] = useState({
    link: "",
    status: true,
    totalCount: 0,
    title: "",
  });


  useEffect(() => {
    const fetchData = async () => {
        const authData = JSON.parse(sessionStorage.getItem("Auth") || "{}");


      setLoading(true);
      try {
        const docRef = doc(db, "userInfo", `${authData.email}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as UserInfoTypes; 
          setUserData({ ...data });
          console.log(docSnap.data());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  return (
    <>
      <div className="flex">
        {/* Sidebar for larger screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {loading?"Loading":<Links  setOpen={setDilogOpen} />}
          <div className="hidden md:inline-block bg-stone-50 w-[40%]">
            <Preview />
          </div>
        </div>

        {/* Bottom Navigation for smaller screens */}
        <div className="md:hidden sm:block w-full fixed bottom-0 left-0 z-50">
          <BottonNav />
        </div>
        <div>
          <DialogComp
            data={data}
            setData={setData}
            open={openDialog}
            setOpen={setDilogOpen}
          />
          <AlertDialogComp />
        </div>
      </div>
    </>
  );
};

export default Home;
