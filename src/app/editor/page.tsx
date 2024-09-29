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

export default function ProblemEditor() {
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
      <Navbar />
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
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Test Cases</span>
                <Button onClick={handleClick}>Click</Button>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
