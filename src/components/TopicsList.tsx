"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTopicsList } from "@/db/queries/select";
import { Topic } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopicsList() {
  const [topics, setTopics] = useState<Topic[] | null>(null);

  useEffect(() => {
    async function fetchTopicsList() {
      try {
        const result = await getTopicsList();
        setTopics(result);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTopicsList();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      {topics && (
        <div className="space-y-4">
          {topics.map((topic) => (
            <Card key={topic.id}>
              <Link
                href={`/topics/editor/${topic.name.replace(" ", "-").toLowerCase()}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      {topic.id}
                    </span>
                    <span>{topic.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{topic.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
