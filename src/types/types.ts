import { editor } from "monaco-editor";
import { JWT } from "next-auth/jwt";
import { MutableRefObject } from "react";

export enum Language {
  Python = 71,
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
  expectedOutput: string;
  status: "Accepted" | "Wrong Answer" | "Time Limit Exceeded";
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

export declare interface MenuBarProps {
  editorRef: MutableRefObject<editor.IStandaloneCodeEditor | null>;
  testCases?: TestCase[];
}

export declare interface Token extends JWT {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
  error?: string;
}

export declare interface Session extends Record<string, unknown> {
  user: {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
  };
}

export {};
