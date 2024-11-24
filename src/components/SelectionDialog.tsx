import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import X from "../assets/icons/x.svg";
import Web from "../assets/icons/link.svg";
import { FC, useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
interface SelectionDialogProps {
  setIndex:(index:Number)=>void;
  openSelection: boolean;
  setSelectionOpen: (openSelection: boolean) => void;
  setOpen:(openSelection:boolean)=>void
}

const SelectionDialog:FC<SelectionDialogProps>=({setIndex,openSelection,setSelectionOpen, setOpen}:SelectionDialogProps)=> {
    const [linkType,setLinkType]=useState({
        social:true
    })

    const handleSubmit=()=>{
      if (linkType.social) setIndex(0);
      else setIndex(2);
      setOpen(true);
      setSelectionOpen(false);  
    }


  return (
    <Dialog open={openSelection} onOpenChange={setSelectionOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="font-inter">
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>
            Choose the type of link you want to add. Click on the card which you
            want to add.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-center flex-wrap gap-4">
          <div
            onClick={() => {
              setLinkType({ social: true });
            }}
            className={`${
              linkType.social == false ? "bg-zinc-50" : "bg-purple-100"
            } w-[46%] gap-2 flex flex-col items-center  justify-center h-[150px] outline outline-1 rounded ${
              linkType.social == false
                ? "outline-zinc-500"
                : "outline-purple-500"
            }`}
          >
            <div
              className={`flex gap-2 items-center   justify-center flex-col p-4`}
            >
              <p className="font-inter text-neutral-800">Add Social Link</p>
              {/* <img src={InstagramLogoIcon} alt="Hello" width={40} /> */}
              <IoLogoInstagram fontSize={30} />
            </div>
          </div>
          <div
            onClick={() => setLinkType({ social: false })}
            className={`w-[46%]   ${
              linkType.social ? "bg-zinc-50" : "bg-purple-100"
            } gap-2 flex flex-col items-center justify-center h-[150px] outline outline-1 rounded ${
              linkType.social ? "outline-zinc-500" : "outline-purple-500"
            }`}
          >
            <p className="font-inter ">Add Other Link</p>
            <img src={Web} alt="Hello" width={40} />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="font-inter bg-purple-600 hover:bg-purple-700"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


export default SelectionDialog