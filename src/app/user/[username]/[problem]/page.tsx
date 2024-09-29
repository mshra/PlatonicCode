"use client";
import Navbar from "@/components/Navbar/Navbar";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

export default function ProblemSession() {
  const editorRef = useRef(null);

  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  return (
    <>
      <Navbar />
      <Editor
        defaultLanguage="python"
        defaultValue='print("hello, world")'
        onMount={handleEditorMount}
        theme="dark"
        height={"100vh"}
      />
    </>
  );
}
