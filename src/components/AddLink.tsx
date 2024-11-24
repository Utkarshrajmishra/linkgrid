import { FC, useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ColorRing } from "react-loader-spinner";
import { UserLinkContext } from "@/context/UserLink";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

interface AddLinkProp {
  setData: (data: any) => void;
  data: {
    link: string;
    show: boolean;
    totalClicks: Number;
    title: string;
  };
  setOpen: (open: boolean) => void;
}

const AddLink: FC<AddLinkProp> = ({ setData, data, setOpen }: AddLinkProp) => {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("Auth") || "{}");
  const { userLink, setUserLink } = useContext(UserLinkContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof typeof data
  ) => {
    setData({ ...data, [name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const updatedLinks = [...userLink, data];
      await setDoc(doc(db, "userLink", `${user.email}`), {
        link: updatedLinks,
      });
      setUserLink(updatedLinks);
      setOpen(false);
    } catch (error) {
      console.error("Error updating links:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-4 font-inter">
      <div className="items-center">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input
          id="title"
          value={data.title}
          onChange={(e) => handleChange(e, "title")}
          placeholder="Input the title"
          className="col-span-3"
        />
      </div>
      <div className="items-center">
        <Label htmlFor="link" className="text-right">
          Link
        </Label>
        <Input
          id="link"
          value={data.link}
          onChange={(e) => handleChange(e, "link")}
          placeholder="Input the link"
          className="col-span-3"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="font-inter mt-2 bg-purple-600 hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? (
          <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
          />
        ) : (
          "Save Changes"
        )}
      </Button>
    </div>
  );
};

export default AddLink;
