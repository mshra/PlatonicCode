"use server";
import { Message } from "@/types/types";
import { Content, GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

async function sendMessage(message: Message): Promise<string> {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      maxOutputTokens: 200,
      temperature: 0.1,
    },
    systemInstruction:
      "You are a teaching assistant and your job is to teach a student using Socratic teaching method. The socratic method is a form of argumentative dialog, based on asking probing questions that leads student to the answer instead of revealing the answer. For example, when teaching a topic on algorithms of sorting and the test case times out you shouldn't just say: 'It timed out because it was a large input size' but instead you should ask the student: 'What can you say about the difference between this test-case and the other test-cases that passed?'.Then, depending on what answer the student gives, ask the next relevant question",
  });

  const history = new Array<Content>();
  const chat = model.startChat({
    history: history,
  });
  const result = await chat.sendMessage(message.text);
  const response = result.response.text();

  history.push({ role: "user", parts: [{ text: message.text }] });
  history.push({
    role: "model",
    parts: [{ text: response }],
  });

  return response;
}
