import { MenuIcon, Search } from "lucide-react";
import MessageCard from "./MessageCard";

const Sidebar = () => {
  return (
    <aside className="w-full h-screen border-r border-zinc-700">
      <div className="flex gap-3 pt-4 pl-5 items-center">
        <MenuIcon className="text-white" />
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search"
            className="w-[90%] h-[50px]  rounded-full bg-[#2c2c2c] pl-[52px]"
          />
          <Search className="absolute top-[25%] text-[#71777d] left-3" />
        </div>
      </div>
      <div className="pl-4 mt-6 pr-2">
        <div className="bg-[#766ac8] p-2 rounded-xl">
          <MessageCard />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
