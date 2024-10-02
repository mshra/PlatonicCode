import { TestCase } from "@/types/types";
import { createStore } from "zustand/vanilla";

export type testCaseState = {
  testCases: TestCase[];
};

export type testCaseActions = {
  updateTestCases: (arg: TestCase[]) => void;
};

export type testCaseStore = testCaseState & testCaseActions;

export const initTestCaseStore = (): testCaseState => {
  return { testCases: [] };
};

export const defaultInitState: testCaseState = {
  testCases: [],
};

export const createTestCaseStore = (
  initState: testCaseState = defaultInitState,
) => {
  return createStore<testCaseStore>()((set) => ({
    ...initState,
    updateTestCases: (newtestCase: TestCase[]) =>
      set({ testCases: newtestCase }),
  }));
};
