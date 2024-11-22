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
import { UserLinkContext } from "@/context/UserLink";
import { LinkTypes, UserInfoTypes } from "@/types/Types";

const Home = () => {
  const { setUserData } = useContext(UserContext);
  const { setUserLink } = useContext(UserLinkContext);
  const [loading, setLoading] = useState(false);
  const [openDialog, setDialogOpen] = useState(false);
  const [data, setData] = useState({
    link: "",
    show: true,
    totalCount: 0,
    title: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const authData = JSON.parse(sessionStorage.getItem("Auth") || "{}");
      setLoading(true);

      try {
        // Fetch userInfo document
        const userInfoRef = doc(db, "userInfo", `${authData.email}`);
        const userInfoSnap = await getDoc(userInfoRef);
        if (userInfoSnap.exists()) {
          const userData = userInfoSnap.data() as UserInfoTypes;
          setUserData(userData);
        }

        // Fetch userLink document
        const userLinkRef = doc(db, "userLink", `${authData.email}`);
        const linkSnap = await getDoc(userLinkRef);
        if (linkSnap.exists()) {
          const dataLink = linkSnap.data()
          console.log(dataLink.link)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {loading ? "Loading..." : <Links setOpen={setDialogOpen} />}
        <div className="hidden md:inline-block bg-stone-50 w-[40%]">
          <Preview />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="md:hidden sm:block w-full fixed bottom-0 left-0 z-50">
        <BottonNav />
      </div>

      {/* Dialogs */}
      <DialogComp
        data={data}
        setData={setData}
        open={openDialog}
        setOpen={setDialogOpen}
      />
      <AlertDialogComp />
    </div>
  );
};

export default Home;
