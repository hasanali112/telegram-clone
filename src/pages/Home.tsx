import { Mic, Paperclip, SendHorizonal, Smile } from "lucide-react";
import "../style/style.css";

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] bg-opacity-80 h-[90vh] p-10 relative">
      <div className="">
        <div
          id="message"
          className="text-slate-400 bg-[#212121] p-3 w-[10%] rounded-lg"
        >
          <h1>Hi</h1>
        </div>
        <div className="absolute bottom-5 w-[90%] ">
          <div className="relative">
            <input
              type="text"
              placeholder="Message"
              className="w-[90%] h-[60px] bg-[#212121] focus:outline-none rounded-xl pl-28 text-white"
            />
            <Smile className="absolute top-[30%] text-[#71777d] left-5" />
            <Paperclip className="absolute top-[30%] text-[#71777d] left-16" />
            <SendHorizonal className="absolute top-[30%] text-[#71777d] right-36" />
            <Mic className="absolute top-[30%] text-[#71777d] right-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
