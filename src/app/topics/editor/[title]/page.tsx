"use client";
import { runThisCode } from "@/actions/judge";
import Chat from "@/components/Chat";
import { EditorMenubar } from "@/components/Editor-Menubar";
import Navbar from "@/components/Navbar/Navbar";
import TestCase from "@/components/TestCase";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef } from "react";

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
      <div className="m-2">
        <EditorMenubar />
      </div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <Chat />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
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
            <ResizablePanel defaultSize={40}>
              <div className="h-full p-4">
                <Tabs defaultValue="testcase">
                  <TabsList>
                    <TabsTrigger value="testcase">Testcase</TabsTrigger>
                    <TabsTrigger value="result">Result</TabsTrigger>
                  </TabsList>
                  <TabsContent value="testcase">
                    <TestCase />
                  </TabsContent>
                  <TabsContent value="result">
                    Run the code first you fucking idiot.
                  </TabsContent>
                </Tabs>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
