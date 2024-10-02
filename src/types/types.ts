export declare enum Language {
  Python = 71,
  Cpp = 76,
}

export declare type JudgeResponse = {
  stdout: string;
  time: string;
  memory: number;
  stderr: any;
  token: string;
  compile_output: any;
  message: any;
  status: { id: number; description: string };
};

export declare type TestCase = {
  nums: number[];
  target: number;
};

export declare type Topic = {
  id: number;
  name: string;
  description: string | null;
  defaultValue: string;
  testCases: TestCase[]; // TODO: change this to suitable jsonb interface
};

export declare type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export {};
