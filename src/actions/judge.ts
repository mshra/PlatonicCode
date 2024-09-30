"use server";
import { JudgeResponse, Language } from "@/types/types";

const JUDGE_API_KEY = process.env.NEXT_JUDGE_API_KEY!;
const baseURL = process.env.NEXT_BASE_URL!;

async function createSubmission(code: string): Promise<string> {
  let token: string;
  try {
    const response = await fetch(`${baseURL}/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${JUDGE_API_KEY}`,
      },
      body: JSON.stringify({
        language_id: Language.Python,
        source_code: code,
      }),
    });
    const data: { token: string } = await response.json();
    token = data.token;
  } catch (err) {
    console.error(err);
  }
  return token!;
}

async function getSubmission(token: string) {
  try {
    const response = await fetch(`${baseURL}/submissions/${token}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JUDGE_API_KEY}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function runThisCode(code: string) {
  const token = await createSubmission(code);
  let response: JudgeResponse;
  const intervalId = setInterval(async () => {
    response = await getSubmission(token);
    if (response.status.description === "Accepted") {
      console.table(response);
      clearInterval(intervalId);
      return JSON.stringify(response);
    }
  }, 100);
}
