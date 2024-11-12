import { Setting } from "@/constants/Setting";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {Setting.map((item) => (
          <div key={item.id} className="flex gap-2" >
            <item.icons />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
