"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTopic } from "@/db/queries/select";
import { TestCase } from "@/types/types";
import { useEffect, useState } from "react";

export default function TestCases({ topicName }: { topicName: string }) {
  const [testCases, setTestCases] = useState<TestCase[] | null>(null);

  useEffect(() => {
    async function fetchTopics() {
      const topicResult = await getTopic(topicName);
      if (!topicResult) {
        return;
      }
      setTestCases(topicResult.testCases);
    }
    fetchTopics();
    return;
  }, [topicName]);

  return (
    <div className="my-4">
      {testCases && (
        <Tabs defaultValue="Case 1" className="w-[400px]">
          <TabsList className="px-2">
            {testCases.map((tc, index) => (
              <TabsTrigger
                key={index}
                value={`Case ${index + 1}`}
              >{`Case ${index + 1}`}</TabsTrigger>
            ))}
          </TabsList>
          {testCases.map((tc, index) => (
            <TabsContent
              key={index}
              className="mx-2 pt-4"
              value={`Case ${index + 1}`}
            >
              <div className="border-2 border-gray-400 p-4 rounded-xl">
                <span className="text-gray-600">nums = </span>
                {tc.nums}
                <br />
                <span className="text-gray-600">target =</span> {tc.target}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
