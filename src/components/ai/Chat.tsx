import { FC } from "react";

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow hidden md:block"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 lg:w-80 md:w-60 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <ChatBox />
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
