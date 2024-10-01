import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { Message } from "@/types/types";
import { sendMessage } from "@/actions/gemini";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Ask me about binary search.",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      const botResponse: Message = {
        id: messages.length + 2,
        text: await sendMessage(newMessage),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "user" ? "text-right ml-72" : "text-left mr-72"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="border-t p-4 flex">
        <Input
          className="flex-grow mr-2 text-xl"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}
