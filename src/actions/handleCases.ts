"use server";
import { TestCase } from "@/types/types";

export async function parseCase(testCase: TestCase) {
  let stdin = "";
  stdin = stdin.concat(testCase.target.toString() + " ");
  testCase.nums.forEach((num) => {
    stdin = stdin.concat(num.toString() + " ");
  });
  return stdin;
}
