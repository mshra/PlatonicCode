export declare enum Language {
  Python = 71,
  Cpp = 76
}

export declare interface JudgeResponse {
  stdout: string;
  time: string;
  memory: number;
  stderr: any;
  token: string;
  compile_output: any;
  message: any;
  status: { id: number; description: string };
}

export declare type Topic = {
  id: number;
  name: string;
  description: string | null;
};

export declare interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export {};
