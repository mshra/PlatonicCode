import { create } from 'zustand';

export interface ResultType {
  id: number;
  status: "Accepted" | "Wrong Answer" | `Runtime Error (NZEC)` | null;
}

type Store = {
  result: ResultType[];
  setResult: (newResult: ResultType) => void;
};

const useStoreResult = create<Store>((set) => ({
  result: [],
  setResult: (newResult) => set((state) => ({ result: [...state.result, newResult] })),
}));

export default useStoreResult;
