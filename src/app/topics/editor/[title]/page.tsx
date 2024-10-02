"use client";
import Chat from "@/components/Chat";
import { EditorMenubar } from "@/components/EditorMenubar";
import TestCases from "@/components/TestCase";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTopic } from "@/db/queries/select";
import { cn } from "@/lib/utils";
import useStoreResult from "@/stores/result-store";
import { Editor } from "@monaco-editor/react";
import { Check, Timer, X } from "lucide-react";
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

  const { result, setResult } = useStoreResult();
  const renderStatusIcon = (status: string | null) => {
    switch (status) {
      case "Accepted":
        return <Check size={20} />;
      case "Wrong Answer":
        return <X size={20} />;
      case "Runtime Error (NZEC)":
        return <Timer size={20} />;
      default:
        return null;
    }
  };

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
                    {/* <Button onClick={handleClick}>run</Button> */}
                    {result.length == 0 && <div>Run the code first!</div>}
                    <div>
                      {result.length != 0 &&
                        result.map((r) => (
                          <div key={r.id}>
                            <div className="w-1/2 mb-4">
                              <div
                                className={cn(
                                  "py-5 rounded-lg flex items-center justify-center gap-2", // Base classes
                                  r.status === "Accepted" &&
                                    "border-green-300 border-2 text-green-500",
                                  r.status === "Wrong Answer" &&
                                    "border-red-300 border-2 text-red-500",
                                  r.status === `Runtime Error (NZEC)` &&
                                    `border-yellow-300 border-2 text-yellow-400`,
                                  !r.status && "bg-gray-300 text-black",
                                )}
                              >
                                {renderStatusIcon(r.status)}
                                {r.status}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
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
