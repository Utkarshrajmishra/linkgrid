import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FC,  useState } from "react";
import { ColorRing } from "react-loader-spinner";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setData: (data: any) => void;
  data: {
    link: string;
    status: boolean;
    totalCount: Number;
    title: string;
  };
}

const DialogComp: FC<DialogProps> = ({ open, setOpen, setData, data }) => {
  const auth=getAuth()
  const userEmail=auth.currentUser?.email
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof typeof data
  ) => {
    setData({ ...data, [name]: e.target.value });
  };

  const handleSubmit = async () => {
   setLoading(true);
   try {
     await setDoc(doc(db, "userLink", `${userEmail}`), data);
   } catch (error) {
     console.log(error);
   } finally {
     setLoading(false);
   }
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-inter">Add Link</DialogTitle>
          <DialogDescription className="font-inter">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="font-inter bg-purple-600 hover:bg-purple-700"
            disabled={loading}
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
              "Save Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
