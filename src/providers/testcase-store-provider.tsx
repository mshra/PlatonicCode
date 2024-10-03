"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  testCaseStore,
  createTestCaseStore,
  initTestCaseStore,
} from "@/stores/testcase-store";

export type TestCaseStoreAPI = ReturnType<typeof createTestCaseStore>;

export const TestCaseStoreContext = createContext<TestCaseStoreAPI | undefined>(
  undefined,
);

export interface TestCaseStoreProviderProps {
  children: ReactNode;
}

export const TestCaseStoreProvider = ({
  children,
}: TestCaseStoreProviderProps) => {
  const storeRef = useRef<TestCaseStoreAPI>();
  if (!storeRef.current) {
    storeRef.current = createTestCaseStore(initTestCaseStore());
  }

  return (
    <TestCaseStoreContext.Provider value={storeRef.current}>
      {children}
    </TestCaseStoreContext.Provider>
  );
};

export const useTestCaseStore = <T,>(
  selector: (store: testCaseStore) => T,
): T => {
  const testCaseStore = useContext(TestCaseStoreContext);

  if (!testCaseStore) {
    throw new Error(
      `useTestCaseStore must be used within TestCaseStoreProvider`,
    );
  }

  return useStore(testCaseStore, selector);
};
