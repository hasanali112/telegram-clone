import telegram from "@/assets/favicon.png";
import { Phone, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#212121] h-[70px] p-2">
      <div className="px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div>
            <img src={telegram} alt="" className="w-14" />
          </div>
          <div className="text-white">
            <h1 className="font-semibold">Telegram</h1>
            <p className="">last seen yesterday at 3.00 PM</p>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <Phone />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
