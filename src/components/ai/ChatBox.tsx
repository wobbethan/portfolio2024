"use client";
import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import TextareaAutosize from "react-textarea-autosize";
import MarkdownLite from "./MarkdownLite";
import { nanoid } from "nanoid";

const ChatBox = () => {
  const init: Message = {
    id: nanoid(),
    role: "assistant",
    content:
      "Hey! I'm EthanGPT, a chatbot created by Ethan to answer all your questions on him and his work. Feel free to ask me anything!",
  };
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/message",
    initialMessages: [init],
  });

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="flex flex-col h-80 justify-between">
      <div className="flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch min-h-[70%]">
        <div className="flex-1 flex-grow" />
        {[...messages].reverse().map((message) => {
          return (
            <div
              className="chat-message mt-1.5"
              key={`${message.id}-${message.id}`}
            >
              <div
                className={cn("flex items-end", {
                  "justify-end": message.role === "user",
                })}
              >
                <div
                  className={cn(
                    "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                    {
                      "order-1 items-end": message.role === "user",
                      "order-2 items-start": message.role === "assistant",
                    }
                  )}
                >
                  <p
                    className={cn("px-4 py-2 rounded-lg", {
                      "bg-blue-600 text-white": message.role === "user",
                      "bg-gray-200 text-gray-900": message.role === "assistant",
                    })}
                  >
                    <MarkdownLite text={message.content} />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div
        className={"border-t border-zinc-300 flex items-center justify-center"}
      >
        <form
          className="relative mt-2 flex-1 overflow-hidden rounded-lg border-none outline-none"
          onSubmit={handleSubmit}
        >
          <TextareaAutosize
            value={input}
            onChange={handleInputChange}
            rows={2}
            onKeyDown={handleKeyDown}
            maxRows={4}
            autoFocus
            maxLength={200}
            placeholder="Write a message"
            className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
