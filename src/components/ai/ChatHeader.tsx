import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ChatHeader: FC = () => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-row justify-start gap-3 items-center">
        <Avatar>
          <AvatarImage src={"/horse.png"} className="object-cover" />
        </Avatar>
        <div className="flex flex-col items-start text-sm">
          <p className="text-xs">Chat with</p>
          <div className="flex gap-1.5 items-center">
            <p className="font-medium">EthanGPT</p>
            <p className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
