export enum Language {
  Python = 71,
}

export interface JudgeResponse {
  stdout: string;
  time: string;
  memory: number;
  stderr: any;
  token: string;
  compile_output: any;
  message: any;
  status: { id: number; description: string };
}

export type Topic = {
  id: number;
  name: string;
  description: string | null;
};
