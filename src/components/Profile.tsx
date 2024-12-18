import { useContext } from "react";
import { User, LogOut, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserInfo";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.setItem(
          "Auth",
          JSON.stringify({ isLogin: false, email: "" })
        );
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-zinc-400"></div>
            <p className="font-semibold">@utkarsh_075</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 font-inter bg-white outline outline-1 outline-black ">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
           

            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>{userData.name}</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>{auth.currentUser?.email}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Profile;
