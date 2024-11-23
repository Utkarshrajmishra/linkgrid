import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Insta from "../assets/icons/insta.svg";
import Web from "../assets/icons/link.svg";
import { FC, useState } from "react";

interface SelectionDialogProps {
  openSelection: boolean;
  setSelectionOpen: (openSelection: boolean) => void;
  setOpen:(openSelection:boolean)=>void
}

const SelectionDialog:FC<SelectionDialogProps>=({openSelection,setSelectionOpen, setOpen}:SelectionDialogProps)=> {
    const [linkType,setLinkType]=useState({
        social:true
    })
  return (
    <Dialog open={openSelection} onOpenChange={setSelectionOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="font-inter">
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>
            Choose the type of link you want to add. Click on the card which you want to add.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-center flex-wrap gap-4">
          <div
            onClick={() =>{ setLinkType({ social: true })}}
            className={`${
              linkType.social == false ? "bg-zinc-50" : "bg-purple-100"
            } w-[46%] gap-2 flex flex-col items-center  justify-center h-[150px] outline outline-1 rounded ${
              linkType.social == false ? "outline-zinc-500" : "outline-purple-500"
            }`}
          >
            <div
              className={`flex gap-2 items-center   justify-center flex-col p-4`}
            >
              <p className="font-inter text-neutral-800">Add Social Link</p>
              <img src={Insta} alt="Hello" width={40} />
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
            onClick={()=>{setOpen(true)
                setSelectionOpen(false)
            }}
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