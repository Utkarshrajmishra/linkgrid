import { Setting } from "@/constants/Setting";

const BottonNav = () => {
  return (
    <div className="flex bg-stone-50 border-t border-gray-400  p-2 w-full justify-between">
      {Setting?.map((item, index) => (
        <div
          key={index}
          className="flex  hover:text-purple-800 flex-col items-center justify-center w-full h-10 gap-1"
        >
          {/* Icon with a consistent size */}
          <item.icons className="w-8 h-8" />
          <p className="text-[0.75rem]">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BottonNav;
