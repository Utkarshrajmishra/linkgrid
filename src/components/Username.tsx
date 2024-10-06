import { ColorRing } from "react-loader-spinner";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { CircleAlert, CircleCheck, Loader } from "lucide-react";
import { useLocation } from "react-router-dom";

const Username = () => {
  const { state } = useLocation();
  const { email } = state;
  const [loading, setLoading] = useState({
    searching: false,
    sendingData: false,
  });
  const [userNotFound, setUserNotFound] = useState(false);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (userId === "") {
      setError("");
      setUserNotFound(false);
      setLoading((prev) => ({ ...prev, searching: false }));
      return;
    }

    const fetchUserName = async () => {
      setLoading((prev) => ({ ...prev, searching: true }));
      try {
        const q = query(
          collection(db, "userName"),
          where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError("");
          setUserNotFound(true);
        } else {
          setError("Username already exists!");
          setUserNotFound(false);
        }
      } catch (error) {
        setError("Error fetching username");
      } finally {
        setLoading((prev) => ({ ...prev, searching: false }));
      }
    };

    const timeoutId = setTimeout(fetchUserName, 1000); 
    return () => clearTimeout(timeoutId);
  }, [userId]);



  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (userId && !error && userNotFound) {
      setLoading((prev) => ({ ...prev, sendingData: true }));
      try {
        await setDoc(doc(db, "userName", email), {
          userId: userId,
        });
        console.log("User created");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prev) => ({ ...prev, sendingData: false }));
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-[300px] md:w-full md:px-14 gap-8 font-inter">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="md:text-6xl text-center text-4xl font-inter font-[650] tracking-[-1px]">
          Welcome to LinkGrid!
        </h1>
        <p className="text-zinc-600 text-center">
          Choose your LinkGrid username. You can always change it later.
        </p>
      </div>
      <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <div className="relative w-full">
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              placeholder="linkgrid/username"
              className="h-12 bg-zinc-100 pl-4 pr-10 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {loading.searching && userId && (
                <Loader className="text-zinc-500 animate-spin" />
              )}
              {error && !loading.searching && (
                <CircleAlert className="text-red-500" />
              )}
              {userNotFound && userId && !loading.searching && (
                <CircleCheck className="text-green-500" />
              )}
            </div>
          </div>
          {
            error && <p className="text-sm text-red-500">{error}</p>
          }
        </div>
        <p className="text-center text-zinc-600">
          By continuing, you agree to receive offers, news and updates from
          LinkGrid.
        </p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="font-semibold flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-3xl"
          disabled={loading.sendingData}
        >
          {loading.sendingData ? (
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
            "Continue"
          )}
        </button>
      </form>
    </section>
  );
};

export default Username;
