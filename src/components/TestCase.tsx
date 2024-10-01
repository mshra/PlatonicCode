import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testcases = [
  {
    nums: "[-1,0,3,5,9,12]",
    target: "9",
  },
  {
    nums: "[-1,0,3,5,9,12]",
    target: "2",
  },
];

export default function TestCase() {
  return (
    <div className="my-4">
      <Tabs defaultValue="Case 1" className="w-[400px]">
        <TabsList className="px-2">
          {testcases.map((tc, index) => (
            <TabsTrigger
              key={index}
              value={`Case ${index + 1}`}
            >{`Case ${index + 1}`}</TabsTrigger>
          ))}
        </TabsList>
        {testcases.map((tc, index) => (
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
    </div>
  );
}
