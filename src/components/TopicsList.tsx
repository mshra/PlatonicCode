import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Topic = {
  serial: number;
  title: string;
  description: string;
};

const topics: Topic[] = [
  {
    serial: 1,
    title: "Binary Search",
    description:
      "Learn the binary search algorithm, a blazingly fast way to search for an element in a sorted array.",
  },
  {
    serial: 2,
    title: "Bubble Sort",
    description: "Sorting an algorithm bubbly way.",
  },
];

export default function TopicsList() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <div className="space-y-4">
        {topics.map((topic) => (
          <Card key={topic.serial}>
            <Link
              href={`/topics/editor/${topic.title.replace(" ", "-").toLowerCase()}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    {topic.serial}
                  </span>
                  <span>{topic.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{topic.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
