import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { Textarea } from "./ui/textarea";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "@/context/UserInfo";
import { CircleAlert, CircleCheck, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialLink from "@/pages/SocialLink";

const Username = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    searching: false,
    sendingData: false,
  });
  const { userData, setUserData } = useContext(UserContext);
  const [userNotFound, setUserNotFound] = useState(false);
  const [data, setData] = useState({
    userId: "",
    bios: "",
    name: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (data.userId === "") {
      setError("");
      setUserNotFound(false);
      setLoading((prev) => ({ ...prev, searching: false }));
      return;
    }

    const fetchUserName = async () => {
      setLoading((prev) => ({ ...prev, searching: true }));
      try {
        const q = query(
          collection(db, "userInfo"),
          where("username", "==", data.userId)
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
  }, [data.userId]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const temp = {
      ...userData,
      username: data.userId,
      name: data.name,
      bio: data.bios,
    };
    setUserData(temp);
    console.log(temp);
    navigate("/template");
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
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <div className="relative w-full">
            <Input
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
              type="text"
              placeholder="linkgrid/username"
              className="h-12 bg-zinc-100 pl-4 pr-10 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {loading.searching && data.userId && (
                <Loader className="text-zinc-500 animate-spin" />
              )}
              {error && !loading.searching && (
                <CircleAlert className="text-red-500" />
              )}
              {userNotFound && data.userId && !loading.searching && (
                <CircleCheck className="text-green-500" />
              )}
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <div>
          <Input
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Input your name"
            className="h-12 bg-zinc-100 pl-4 pr-10 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
        </div>
        <div>
          <Textarea
            onChange={(e) => setData({ ...data, bios: e.target.value })}
            rows={5}
            placeholder="Input your bios (Try to keep it short and not more than 60 letters)"
            className=" bg-zinc-100 pl-4 pr-10 outline outline-0 hover:outline-1 outline-zinc-400 shadow-none w-full"
          />
        </div>
        <button
          type="submit"
          className={`font-semibold flex items-center justify-center   text-white h-12 rounded-3xl ${
            (loading.sendingData || !userNotFound) &&
            (data.bios == "" || data.name == "")
              ? "bg-purple-300 hover:bg-purple-300"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
          disabled={
            (loading.sendingData || !userNotFound) &&
            (data.bios == "" || data.name == "")
          }
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default Username;
