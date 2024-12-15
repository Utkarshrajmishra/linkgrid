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
import { DialogIndexTypes } from "@/types/Types";

interface DialogProps {
  index:DialogIndexTypes,
  setIndex:(data: DialogIndexTypes)=>void,
  open: boolean;
  setOpen: (open: boolean) => void;
  setData: (data: any) => void;
  data: {
    link: string;
    show: boolean;
    totalClicks: number; 
    title: string;
  };
}

const DialogComp: FC<DialogProps> = ({ index,setIndex,open, setOpen, setData, data }) => {

  const components = [
    <AddSocial setIndex={setIndex}/>, 
    <SocialInput setOpen={setOpen}/>, 
    <AddLink setData={setData} setIndex={setIndex} data={data} setOpen={setOpen} dataIndex={index}/>, 
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
        <div>{components[Number(index.index)]}</div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
