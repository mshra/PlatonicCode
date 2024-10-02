import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { Message } from "@/types/types";
import {
  ChatSession,
  Content,
  GenerativeModel,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import { useTestCaseStore } from "@/providers/testcase-store-provider";

export default function Chat(topicName: string) {
  // const GEMINI_API_KEY = process.env.gemini;
  // const { testCases } = useTestCaseStore((state) => state);
  // const [messages, setMessages] = useState<Message[]>([
  //   {
  //     id: 1,
  //     text: "Let's learn shall we, get to the coding straight away or ask a question...",
  //     sender: "bot",
  //   },
  // ]);
  // const [inputValue, setInputValue] = useState("");
  // const [chat, setChat] = useState<ChatSession>();
  // const history = useMemo(() => new Array<Content>(), []);

  // useEffect(() => {
  //   const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  //   const model = genAI.getGenerativeModel({
  //     model: "gemini-1.5-flash",
  //     generationConfig: {
  //       maxOutputTokens: 200,
  //       temperature: 0.1,
  //     },
  //     systemInstruction:
  //       "You are a teaching assistant and your job is to teach a student using Socratic teaching method. The socratic method is a form of argumentative dialog, based on asking probing questions that leads student to the answer instead of revealing the answer. For example, if the test case times out you shouldn't just say: 'It timed out because it was a large input size' but instead you should ask the student: 'What can you say about the difference between this test-case and the other test-cases that passed?'.Then, depending on what answer the student gives, ask the next relevant question.",
  //   });
  //   setChat(() => model.startChat({ history: history }));
  //   // if (testCases[0].status) {
  //   //   testCases.forEach(async (testCase) => {
  //   //     // get response on testcases from AI if it exists.
  //   //     const helpInCase = await sendMessage({
  //   //       id: messages.length + 1,
  //   //       text: `The student is learning the topic ${topicName} and ran the code on this test case: ${testCase.nums} and got this response ${testCase.status}. Help the student in debugging by socratic method.`,
  //   //       sender: "user",
  //   //     });
  //   //     history.push({
  //   //       role: "model",
  //   //       parts: [{ text: helpInCase as string }],
  //   //     });
  //   //   });
  //   // }
  // }, [history, messages, testCases]);

  async function sendMessage(message: Message) {
    const ai_response = await chat?.sendMessage(message.text);
    return ai_response?.response.text();
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
      };
      history.push({ role: "user", parts: [{ text: newMessage.text }] });

      setMessages([...messages, newMessage]);
      setInputValue("");

      const botResponse: Message = {
        id: messages.length + 2,
        text: (await sendMessage(newMessage)) as string,
        sender: "bot",
      };

      history.push({ role: "model", parts: [{ text: botResponse.text }] });
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
