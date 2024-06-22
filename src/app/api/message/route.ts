import { chatbotPrompt } from "@/components/ai/chatbot-prompt";
import { MessageArraySchema } from "@/lib/validators/message";

import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  //extract prompt from body of request
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [
      {
        role: "system",
        content: chatbotPrompt,
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
