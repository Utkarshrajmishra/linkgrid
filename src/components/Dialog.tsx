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
import { FC } from "react";

interface DialogProps{
    open:boolean,
    setOpen:(open:boolean)=>void
}

const DialogComp:FC<DialogProps>=({open, setOpen}:DialogProps)=> {
    const handleSubmit=()=>{
        setOpen(false)
    }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-inter">Add Link</DialogTitle>
          <DialogDescription className="font-inter" >
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 font-inter">
          <div className=" items-center">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="Input the title"
              className="col-span-3"
            />
          </div>
          <div className=" items-center">
            <Label htmlFor="username" className="text-right">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="Input the link"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className=" font-inter bg-purple-600 hover:bg-purple-700">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


export default DialogComp