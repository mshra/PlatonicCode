"use client";
import Chat from "@/components/Chat";
import { EditorMenubar } from "@/components/EditorMenubar";
import TestCases from "@/components/TestCase";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTopic } from "@/db/queries/select";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";

export default function ProblemEditor({
  params,
}: {
  params: { title: string };
}) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [defaultValue, setDefaultValue] = useState<string>("");
  const [topicName, setTopicName] = useState<string>("");

  useEffect(() => {
    // get the topic name as url search params and do some string transformations.
    setTopicName(
      params.title
        .replace("-", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    );
  }, [params.title]);

  useEffect(() => {
    async function getDefaultValue() {
      const topic = await getTopic(topicName);
      if (!topic) {
        return;
      }
      setDefaultValue(topic.defaultValue);
    }
    getDefaultValue();
  }, [topicName]);

  function handleEditorMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  async function handleClick() {
    const code = editorRef.current!.getValue();
    console.log("run clicked");
    // const output = await runThisCode(code);
    // console.log(output);
  }

  return (
    <div className="grid grid-rows-[auto_1fr] h-full text-xl">
      <div className="m-2">
        <EditorMenubar editorRef={editorRef} />
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
                {defaultValue && (
                  <Editor
                    theme="vs-dark"
                    defaultLanguage="python"
                    defaultValue={defaultValue}
                    onMount={handleEditorMount}
                  />
                )}
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
                    <TestCases topicName={topicName} />
                  </TabsContent>
                  <TabsContent value="result">
                    <Button onClick={handleClick}>run</Button>
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
