"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Play, Settings } from "lucide-react";
import Link from "next/link";
import { JudgeResponse, MenuBarProps, TestCase } from "@/types/types";
import { useTestCaseStore } from "@/providers/testcase-store-provider";
import { runThisCode } from "@/actions/judge";
import { parseCase } from "@/actions/handleCases";
import useStoreResult, { ResultType } from "@/stores/result-store";

export function EditorMenubar(props: MenuBarProps) {
  const { testCases } = useTestCaseStore((state) => state);
  const { result, setResult } = useStoreResult();

  async function handleClick() {
    const code = props.editorRef.current?.getValue();
    if (!code) return;

    testCases.forEach(async (testCase, index) => {
      const stdin = await parseCase(testCase);
      const expected_output = testCase.expectedOutput;
      const output: JudgeResponse = await runThisCode(
        code,
        stdin,
        expected_output,
      ).then((res) => JSON.parse(res));
      const outputStatus: ResultType = {
        id: index,
        status: output.status.description,
      };
      setResult(outputStatus);

      if (output.stdout === testCase.expectedOutput) {
        testCase.status = "Accepted";
      } else {
        testCase.expectedOutput = output.status.description;
      }
    });
  }

  return (
    <>
      <Menubar className="flex justify-around m-2">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-gray-700">
            <Link href={"/"}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="cursor-pointer hover:bg-gray-700"
            onClick={handleClick}
          >
            <Play className="text-[#28c244]" />
            Run
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Settings />
            Settings
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
