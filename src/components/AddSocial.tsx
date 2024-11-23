import { UserContext } from "@/context/UserInfo";
import { useContext, useState } from "react";
import { Icons } from "@/constants/Icons";
const AddSocial = () => {
  const [soicalProviders, setSocialProviders] = useState<Number[]>([]);
  const { userData } = useContext(UserContext);
  const socialLinks = userData.soicalProviders;

  const handleClick = (index: any) => {
    const temp = [...soicalProviders];
    if (temp.includes(index)) {
      const indx = soicalProviders.indexOf(index);
      temp.splice(indx, 1);
      return setSocialProviders(temp);
    }
    setSocialProviders(prev=>[...prev, index]);
    console.log(temp)
  };

  return (
    <div className="flex flex-col gap-3">
        <p  className="text-sm font-inter text-zinc-600">Click on icon to select the provider.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {Icons.map((item, index) => (
          <div
            className={`${
              socialLinks.includes(index) || index == 1
                ? "hidden"
                : "inline-block"
            } outline-1 outline-black  ${
              soicalProviders.includes(index) ? "outline" : " "
            }`}
          >
            <img
              onClick={() => handleClick(index)}
              width={38}
              src={item.icon}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSocial;
