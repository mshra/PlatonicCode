"use server";

import { JudgeResponse, Language } from "@/types/types";

const JUDGE_API_KEY = process.env.NEXT_JUDGE_API_KEY!;
const baseURL = process.env.NEXT_BASE_URL!;

async function createSubmission(
  code: string,
  stdin: string,
  expected_output: string,
): Promise<string> {
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
        stdin: stdin,
        expected_output: expected_output,
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function runThisCode(
  code: string,
  stdin: string,
  expected_output: string,
): Promise<string> {
  const INITIAL_WAIT_TIME_MS = 1000;
  const MAX_WAIT_TIME_MS = 2 * 60 * 1000;
  const WAIT_TIME_STEP_MS = 100;

  const token = await createSubmission(code, stdin, expected_output);
  await sleep(INITIAL_WAIT_TIME_MS);

  let WAIT_TIME_SO_FAR = INITIAL_WAIT_TIME_MS;
  let iteration = 1;
  let response: JudgeResponse;

  while (true) {
    response = await getSubmission(token);
    if (response.status.id >= 3) {
      console.table(response);
      return JSON.stringify(response);
    }

    const CURRENT_WAIT_TIME_MS = iteration * WAIT_TIME_STEP_MS;
    if (WAIT_TIME_SO_FAR + CURRENT_WAIT_TIME_MS > MAX_WAIT_TIME_MS) {
      break;
    }

    await sleep(CURRENT_WAIT_TIME_MS);
    WAIT_TIME_SO_FAR += CURRENT_WAIT_TIME_MS;
    iteration += 1;
  }
  console.table(response);
  return JSON.stringify(response);
}
