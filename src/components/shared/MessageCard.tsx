import telegram from "@/assets/favicon.png";

const MessageCard = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div>
          <img src={telegram} alt="" className="w-16" />
        </div>
        <div className="text-white">
          <div className="flex  justify-between">
            <h1 className="font-semibold">Telegram</h1>
            <h1>08:01 PM</h1>
          </div>
          <p className="mt-2">Login code: 11123. Do not this...</p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
