import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FC } from "react";
import AddSocial from "./AddSocial";
import SocialInput from "./SocialInput";
import AddLink from "./AddLink";

interface DialogProps {
  index:Number,
  setIndex:(index:Number)=>void,
  open: boolean;
  setOpen: (open: boolean) => void;
  setData: (data: any) => void;
  data: {
    link: string;
    show: boolean;
    totalClicks: number; // Use lowercase `number` for TypeScript
    title: string;
  };
}

const DialogComp: FC<DialogProps> = ({ index,setIndex,open, setOpen, setData, data }) => {

  const components = [
    <AddSocial setIndex={setIndex}/>, // AddSocial doesn't need props based on current code
    <SocialInput setOpen={setOpen}/>, // SocialInput doesn't need props based on current code
    <AddLink setData={setData} data={data} setOpen={setOpen} />, // AddLink needs props
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-inter">Add Link</DialogTitle>
          <DialogDescription className="font-inter">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* Render the current component based on the index */}
        <div>{components[Number(index)]}</div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
