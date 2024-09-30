"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Chat from "@/components/Chat";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { runThisCode } from "@/actions/judge";
import TestCases from "@/components/test-cases";
import { Play } from "lucide-react";

export default function ProblemEditor({
  params,
}: {
  params: { title: string };
}) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  async function handleClick() {
    const code = editorRef.current!.getValue();
    const output = await runThisCode(code);
    console.log(output);
  }

  return (
    <div className="grid grid-rows-[auto_1fr] h-full text-xl">
      <div className="mb-2">
        <Navbar />
      </div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <Chat />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70}>
              <div className="flex h-full items-center justify-center p-2">
                <Editor
                  theme="vs-dark"
                  defaultLanguage="python"
                  defaultValue="print('hello, world')"
                  onMount={handleEditorMount}
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
              <div className="h-full  p-6">
              <Button className="flex justify-center items-center gap-1 hover:scale-110" onClick={handleClick}>
                Run <Play size={15}/>
              </Button>
                <div>
                  <TestCases testcases={testcases}/>
                </div>
                
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}




export const testcases = [
  {
    input:`[1,2,4,5]`
  }, 
  {
    input:`[1,2]`
  }, 
  {
    input:`[1,2,4,]`
  }, 
  {
    input:`[1]`
  }
]